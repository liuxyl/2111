import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js' // 轨道控制器
import * as THREE from 'three'

export default function Home(props) {
  const ref = useRef()

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
    camera.position.set(5, 3, 20)
    scene.add(camera)

    // 添加物体
    // BoxGeometry(x轴宽度, y轴宽度, z轴宽度) 默认都是1: 创建立方缓冲几何体
    const cubeGeometry = new THREE.BoxGeometry(5, 5, 5)
    // 添加材质
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff99900 })
    // 根据几何体和材质创建网格
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // 将几何体添加到场景中
    scene.add(cube)

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
    const controls = new OrbitControls(camera, document.body)

    // 将其设置为true以启用阻尼 (惯性)
    controls.enableDamping = true

    // 自动围绕目标旋转
    controls.autoRotate = true

    function animate() {
      // 更新轨道控制器
      controls.update()
      requestAnimationFrame(animate)
      // cube.rotation.x += 0.01
      // cube.rotation.y += 0.01
      // 使用渲染器 通过相机将场景渲染出来
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return (
    <div ref={ref}>

    </div>
  )
}
