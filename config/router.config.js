export default [
  {
    path: "/user",
    component: "@/layouts/BasicUser",
    routes: [{ path: "/user/login", component: "./login" }],
  },
  {
    path: "/",
    component: "@/layouts/BasicLayout", // 引入布局组件
    wrappers: ["@/pages/authorized"], // 路由守卫
    routes: [
      { path: "/city", component: "./city" },
      { path: "/bj", component: "./bj" },
      { path: "/add", component: "./add" },
      { path: "/tester", component: "./tester" },
      { path: "/home", component: "./home" },
      { path: "/forms", component: "./forms" },
      { path: "/forms/:id", component: "./forms" },

      { path: "/", component: "./tables", title: "首页" },
    ],
  },
];
