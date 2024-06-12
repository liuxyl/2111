import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js' // 轨道控制器
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'

export default function Demo6 (props) {
  const ref = useRef()
  let material = null

  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene()

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75, // 摄像机视锥体垂直视野角度 越大视野越大
      window.innerWidth / window.innerHeight, // 摄像机视锥体长宽比
      0.1, // 摄像机视锥体近端面
      1000, // 摄像机视锥体远端面
    )

    // 设置相机位置
    camera.position.set(5, 3, 1)
    scene.add(camera)

    // 创建缓冲器几何体
    const geometry = new THREE.BufferGeometry()
    // 创建顶点数据
    const vertices = new Float32Array([
      -1.0, -1.0, 0,
      1.0, -1.0, 0.0,
      1.0, 1.0, 0.0,
    ])

    // 存储和管理几何体的属性信息
    // BufferAttribute(数据, 顶点数据值大小)
    const attribute = new THREE.BufferAttribute(vertices, 3)
    // 创建顶点属性
    geometry.setAttribute('position', attribute)
    // 创建材质
    material = new THREE.MeshBasicMaterial({ color: '#FFC107' })
    // 创建网格对象
    const plane = new THREE.Mesh(geometry, material)

    scene.add(plane)

    // 初始化渲染器
    const renderer = new THREE.WebGLRenderer()
    // 设置渲染的尺寸大小
    renderer.setSize(window.innerWidth, window.innerHeight)
    // renderer.domElement 当前的 canvas
    ref.current.appendChild(renderer.domElement)

    // AxesHelper: 用于简单模拟3个坐标轴的对象
    const axesHelper = new THREE.AxesHelper(55)
    // 坐标轴添加到场景里
    scene.add(axesHelper)

    // OrbitControls 轨道控制器 (将要被控制的相机, 用于事件监听的HTML元素)
    const controls = new OrbitControls(camera, renderer.domElement)
    
    function animate () {
      // 更新轨道控制器
      controls.update()
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  useEffect(() => {
    const gui = new GUI()

    gui.add(material, 'wireframe').name('设置材质模式')
  }, [])

  return (
    <div ref={ref}></div>
  )
}


// import React, { useEffect, useState } from 'react';
// import { Tree } from 'antd';
// const treeData = [
//   {
//     title: '小花',
//     key: '1',
//     children: [
//       {
//         title: '小白',
//         key: '2',
//         disabled: true,
//       },
//       {
//         title: '小蓝',
//         key: '3',
//         disabled: true,
//       },
//     ],
//   },
//   {
//     title: '小花2',
//     key: '11',
//     children: [
//       {
//         title: '小白2',
//         key: '22',
//         disabled: true,
//       },
//       {
//         title: '小蓝2',
//         key: '33',
//         disabled: true,
//       },
//     ],
//   },
// ];
// const App = () => {
//   const [expandedKeys, setExpandedKeys] = useState([]);
//   const [checkedKeys, setCheckedKeys] = useState(['2', '3', '4']);
//   const [selectedKeys, setSelectedKeys] = useState([]);
//   const [autoExpandParent, setAutoExpandParent] = useState(true);
//   const onExpand = (expandedKeysValue) => {
//     // console.log('onExpand', expandedKeysValue);
//     setExpandedKeys(expandedKeysValue);
//     setAutoExpandParent(false);
//   };
//   const onCheck = (checkedKeysValue) => {
//     // console.log('onCheck', checkedKeysValue);
//     setCheckedKeys(checkedKeysValue);
//   };
//   const onSelect = (selectedKeysValue, info) => {
//     // console.log('onSelect', info);
//     setSelectedKeys(selectedKeysValue);
//   };

//   useEffect(() => {
//     treeData.forEach(opt => {
//       const { children } = opt
//       const { length } = children
//       const xxx = children.filter(dt => dt.disabled)
//       if (xxx.length === length) {
//         checkedKeys.push(opt.key)
//         console.log(1);
//       }
//     })
//     setCheckedKeys([...checkedKeys])
//     setExpandedKeys(['1'])
//   }, [])

//   console.log(checkedKeys, 1);

//   // console.log(treeData, 1);
//   return (
//     <Tree
//       checkable
//       onExpand={onExpand}
//       expandedKeys={expandedKeys}
//       autoExpandParent={autoExpandParent}
//       onCheck={onCheck}
//       checkedKeys={checkedKeys}
//       onSelect={onSelect}
//       selectedKeys={selectedKeys}
//       treeData={treeData}
//     />
//   );
// };
// export default App;
