import comp from "E:/testpage/vuepress-starter/docs/.vuepress/.temp/pages/category/categorya/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/categorya/\",\"title\":\"分类 CategoryA\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"分类 CategoryA\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"CategoryA\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
