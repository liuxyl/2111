import { defineConfig } from 'umi'
import postCssPxToViewport from 'postcss-px-to-viewport'
import proxy from './proxy'
import routes from './router.config'

const path = require('path')
const genericName = require('generic-names')
const generateRule = '[name]__[local]___[hash:base64:5]'
const generateIdentName = genericName(generateRule, {
  context: __dirname,
})

// umi4 默认就是路由懒加载
export default defineConfig({
  hash: true,
  routes,
  plugins: ['@umijs/plugins/dist/dva'],
  dva:{},
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@@@': path.resolve(__dirname, '../src/components'),
    '@assets': path.resolve(__dirname, '../src/assets/images'),
  },
  ...proxy,
  manifest: {
    basePath: '/',
  },
  extraBabelPlugins: [
    [
      'react-css-modules',
      {
        exclude: 'node_modules', // 排除 node_modules 所有 css 不走 styleName编译
        generateScopedName: (a, b) => generateIdentName(a, b), // 哈希规则
        filetypes: { // 哪些后缀走 sytleName解析
          '.less': {
            syntax: 'postcss-less',
          },
        },
      },
    ],
  ],
  // extraPostCSSPlugins: [ // 配置额外的 postcss 插件。
  //   postCssPxToViewport({
  //     viewportWidth: 375,     // 设计稿的视窗宽度
  //     unitToConvert: 'px',    // 需要把什么单位转成 vh vw, 默认为"px"
  //     unitPrecision: 5,       // 单位转换后保留的精度
  //     viewportUnit: 'vw',     // 希望使用的视窗单位
  //     selectorBlackList: ['adm', 'ant', 'xiaohua'],  // 需要忽略的 CSS 选择器，不会转为视窗单位，使用原有的 px 等单位
  //     minPixelValue: 1,       // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
  //   })
  // ],
  cssLoader: {
    modules: {
      auto: function (opt) {
        // 这2个文件不走 styleName 编译
        const index = path.normalize('src/styles/index.less')
        const components = path.normalize('src/components')

        return !opt.includes('node_modules')
          && !opt.includes(index)
          && !opt.includes(components)
      },
      getLocalIdent: (loaderContext, localIdentName, localName, options) => {
        const { resourcePath } = loaderContext
        return generateIdentName(localName, resourcePath)
      },
    },
  },
  // chainWebpack(memo, { env, args }) {
  //   memo.module
  //     .rule('markdown')
  //     .test(/\.md$/)
  //     .use('remark-loader')
  //     .loader('remark-loader')
  //     .options({
  //       plugins: [
  //         remark
  //       ],
  //     });
  // },
})
