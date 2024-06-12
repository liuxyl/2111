import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js' // 轨道控制器
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'

export default function Demo5 (props) {
  const ref = useRef()
  let cube = null
  let cubeMaterial1 = null
  let cubeMaterial2 = null
  let camera = null

  const obj = {
    full: function () {
      document.body.requestFullscreen()
    },

    exit: () => {
      document.exitFullscreen()
    },

    color: '#F99',
  }

  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene()

    // 创建相机
    camera = new THREE.PerspectiveCamera(
      75, // 摄像机视锥体垂直视野角度 越大视野越大
      window.innerWidth / window.innerHeight, // 摄像机视锥体长宽比
      0.1, // 摄像机视锥体近端面
      1000, // 摄像机视锥体远端面
    )

    // 设置相机位置
    camera.position.set(5, 3, 20)
    scene.add(camera)

    // 添加物体
    // BoxGeometry(x轴宽度, y轴宽度, z轴宽度) 默认都是1: 创建立方缓冲几何体
    const box = new THREE.BoxGeometry(5, 5, 5)
    
    // 添加材质
    cubeMaterial1 = new THREE.MeshBasicMaterial({ color: '#FFC107' })
    cubeMaterial2 = new THREE.MeshBasicMaterial({ color: '#009688' })

    // 设置材质为线框模式
    cubeMaterial2.wireframe = true

    // 根据几何体和材质创建网格
    const parentCube = new THREE.Mesh(box, cubeMaterial2)
    cube = new THREE.Mesh(box, cubeMaterial1)
    
    // 设置子元素几何体位置
    cube.position.set(8, 5, 0)
    // 子元素放大1.5倍
    cube.scale.set(1.2, 1.2, 1.2)
    // 父元素放大1.2倍, 父元素放大 子元素也会跟着一起放大
    parentCube.scale.set(1.2, 1.2, 1.2)

    cube.rotation.set(45, 0, 0)

    // 把 cube 添加到 parentCube 网格内
    parentCube.add(cube)

    // 将几何体添加到场景中
    scene.add(parentCube)

    // 初始化渲染器
    const renderer = new THREE.WebGLRenderer()
    // 设置渲染的尺寸大小
    renderer.setSize(window.innerWidth, window.innerHeight)
    // renderer.domElement 当前的 canvas
    ref.current.appendChild(renderer.domElement)

    // AxesHelper: 用于简单模拟3个坐标轴的对象
    const axesHelper = new THREE.AxesHelper(15)
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

    // 将控制器添加到GUI
    gui.add(obj, 'full').name('全屏')
    gui.add(obj, 'exit').name('退出全屏')
    // 设置 position 位置
    // gui.add(cube.position, 'x', 0, 10).name('x轴范围')
    // gui.add(cube.position, 'x', 0, 10)
    //   .min(-10)
    //   .max(10)
    //   .step(1)
    //   .name('x轴范围')
    //   // 每次改变值的监听
    //   .onChange(evt => {
    //     console.log(evt, 1);
    //   })
    // gui.add(cube.position, 'y', 0, 10).min(-10).max(10).step(1).name('y轴范围')
    // gui.add(cube.position, 'z', 0, 10).min(-10).max(10).step(1).name('z轴范围')

    gui.add(camera, 'fov', 1, 180).onChange(() => {
      camera.updateProjectionMatrix()
    })

    gui.add(cubeMaterial2, 'wireframe').name('设置材质模式')
    gui.addColor(obj, 'color')
      .name('颜色')
      .onChange(val => {
        // 设置材质的颜色
        cube.material.color.set(val)
      })

    // 以层级的形式创建一个新的GUI
    const folder = gui.addFolder('xyz')
    folder.add(cube.position, 'x', 0, 10)
      .min(-10)
      .max(10)
      .step(1)
      .name('x轴范围')
      // 拖动完成后触发
      .onFinishChange(opt => {
        console.log(opt, 1);
      }) 
    folder.add(cube.position, 'y', 0, 10).min(-10).max(10).step(1).name('y轴范围')
    folder.add(cube.position, 'z', 0, 10).min(-10).max(10).step(1).name('z轴范围')

  }, [])

  return (
    <div ref={ref}>

    </div>
  )
}
