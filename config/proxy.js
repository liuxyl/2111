export default {
  proxy: {
    '/dev': {
      target: 'http://blogs.jsony.com/',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/dev': ''
      },
    },
  },
}
