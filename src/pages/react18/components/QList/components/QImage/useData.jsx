import { useState } from 'react'

export default function useData (props) {

  
  const xxx = [
    {
      "att_id": 3295,
      "name": "6556564da6290b8099389821455c03f7.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/03\/20240319\/6556564da6290b8099389821455c03f7.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/03\/20240319\/6556564da6290b8099389821455c03f7.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1710851307,
      "image_type": 1,
      "module_type": 1,
      "real_name": "12.jpg",
      // num: 1,
    },
    {
      "att_id": 3294,
      "name": "d2db9a9a9cf1d57077d2c51e85f97dda.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/03\/20240319\/d2db9a9a9cf1d57077d2c51e85f97dda.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/03\/20240319\/d2db9a9a9cf1d57077d2c51e85f97dda.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1710851295,
      "image_type": 1,
      "module_type": 1,
      "real_name": "10.jpg"
      // num: 2,
    },
    {
      "att_id": 3291,
      "name": "8efffffb59ac04e89e813a67fa9aaa55.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/03\/20240315\/8efffffb59ac04e89e813a67fa9aaa55.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/03\/20240315\/8efffffb59ac04e89e813a67fa9aaa55.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1710499064,
      "image_type": 1,
      "module_type": 1,
      "real_name": "1.jpg"
    },
    {
      "att_id": 3238,
      "name": "c65f5d44557d215bd72e01ad8f1ef0ed.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/01\/20240129\/c65f5d44557d215bd72e01ad8f1ef0ed.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/01\/20240129\/c65f5d44557d215bd72e01ad8f1ef0ed.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1706536976,
      "image_type": 1,
      "module_type": 1,
      "real_name": "001.jpg"
    },
    {
      "att_id": 3205,
      "name": "7830767845ef781629fe49563d4ce7c5.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/01\/20240129\/7830767845ef781629fe49563d4ce7c5.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2024\/01\/20240129\/7830767845ef781629fe49563d4ce7c5.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1706523717,
      "image_type": 1,
      "module_type": 1,
      "real_name": "11.jpg"
    },
    {
      "att_id": 3188,
      "name": "04156fb3e132408a976062e67ea4a22a.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231124\/04156fb3e132408a976062e67ea4a22a.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231124\/04156fb3e132408a976062e67ea4a22a.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1700813865,
      "image_type": 1,
      "module_type": 1,
      "real_name": "6.jpg"
    },
    {
      "att_id": 3149,
      "name": "d6c72a34e38089baafc85260d943cdc4.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231104\/d6c72a34e38089baafc85260d943cdc4.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231104\/d6c72a34e38089baafc85260d943cdc4.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1699063308,
      "image_type": 1,
      "module_type": 1,
      "real_name": "download.jpg"
    },
    {
      "att_id": 3115,
      "name": "9cb7c5ad3397ef8a92d1aab09393fb6a.png",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231103\/9cb7c5ad3397ef8a92d1aab09393fb6a.png",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231103\/9cb7c5ad3397ef8a92d1aab09393fb6a.png",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1698997913,
      "image_type": 1,
      "module_type": 1,
      "real_name": "11.png"
    },
    {
      "att_id": 3108,
      "name": "7a8bc779d46abe3c10be54cec4172ff3.png",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231103\/7a8bc779d46abe3c10be54cec4172ff3.png",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/11\/20231103\/7a8bc779d46abe3c10be54cec4172ff3.png",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1698997720,
      "image_type": 1,
      "module_type": 1,
      "real_name": "4.png"
    },
    {
      "att_id": 3062,
      "name": "eb669ebd2581f7776bcbc2736678cf6e.png",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/10\/20231028\/eb669ebd2581f7776bcbc2736678cf6e.png",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/10\/20231028\/eb669ebd2581f7776bcbc2736678cf6e.png",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1698456643,
      "image_type": 1,
      "module_type": 1,
      "real_name": "404_img1.png"
    },
    {
      "att_id": 3049,
      "name": "c549797b8af08026b7e03b6e9941b813.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/10\/20231028\/c549797b8af08026b7e03b6e9941b813.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/10\/20231028\/c549797b8af08026b7e03b6e9941b813.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1698453024,
      "image_type": 1,
      "module_type": 1,
      "real_name": "9DBAE402AD34AE037D687F1482F3A50A.jpg"
    },
    {
      "att_id": 2861,
      "name": "df22bc4a7acb98c520e4ebf0bd25020b.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/df22bc4a7acb98c520e4ebf0bd25020b.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/df22bc4a7acb98c520e4ebf0bd25020b.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1689078673,
      "image_type": 1,
      "module_type": 1,
      "real_name": "2159362101d0a46d.jpg"
    },
    {
      "att_id": 2858,
      "name": "166f23a2eeaf2cbe69ce802d1f64c785.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/166f23a2eeaf2cbe69ce802d1f64c785.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/166f23a2eeaf2cbe69ce802d1f64c785.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1689078672,
      "image_type": 1,
      "module_type": 1,
      "real_name": "-78462888f17259d6.jpg"
    },
    {
      "att_id": 2856,
      "name": "0f74a6bb220ba9136668e57d075f6382.gif",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/0f74a6bb220ba9136668e57d075f6382.gif",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/0f74a6bb220ba9136668e57d075f6382.gif",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1689078671,
      "image_type": 1,
      "module_type": 1,
      "real_name": "81589ebb07ae6957736f6c4d6a73a0041615571574539.gif"
    },
    {
      "att_id": 2855,
      "name": "6554e2b8d612fc728b0524802e86fe93.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/6554e2b8d612fc728b0524802e86fe93.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/6554e2b8d612fc728b0524802e86fe93.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1689078668,
      "image_type": 1,
      "module_type": 1,
      "real_name": "-7622953b466af0d9.jpg"
    },
    {
      "att_id": 2854,
      "name": "8a32053ac46ebd1fe36a2fc8e4122d51.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/8a32053ac46ebd1fe36a2fc8e4122d51.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/8a32053ac46ebd1fe36a2fc8e4122d51.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1689078665,
      "image_type": 1,
      "module_type": 1,
      "real_name": "-4981717d258a5c6a.jpg"
    },
    {
      "att_id": 2853,
      "name": "793964d2ce63285bcc4a1d2671f2e914.png",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/793964d2ce63285bcc4a1d2671f2e914.png",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/793964d2ce63285bcc4a1d2671f2e914.png",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1689078664,
      "image_type": 1,
      "module_type": 1,
      "real_name": "854747f3b08bdb8836d645af4122886f1638594368291.png"
    },
    {
      "att_id": 2852,
      "name": "cfec1368386ba0f570f02b9393eaea04.jpg",
      "att_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/cfec1368386ba0f570f02b9393eaea04.jpg",
      "satt_dir": "http:\/\/www.lovetang.top\/uploads\/attach\/2023\/07\/20230711\/cfec1368386ba0f570f02b9393eaea04.jpg",
      "att_size": "0",
      "att_type": "image\/jpeg",
      "pid": 0,
      "time": 1689078662,
      "image_type": 1,
      "module_type": 1,
      "real_name": "3827895ef8091fec.jpg",
      num: 0,
    }
  ]
  
  const [data, setData] = useState(xxx.map(dt => {
    dt.num = 0
    return dt
  }))

  return {
    data,
    setData,
  }
}
