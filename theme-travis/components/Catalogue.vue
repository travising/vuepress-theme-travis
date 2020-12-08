<template>
  <div class="theme-vdoing-content">
    <ModuleTransition delay="0.04">
      <div class="column-wrapper" v-if="recoShowModule">
        <img :src="$withBase(pageData.imgUrl)" />
        <dl class="column-info">
          <dt class="title">{{pageData.title}}</dt>
          <dd
            class="description"
            v-html="pageData.description"
          ></dd>
        </dl>
      </div>
    </ModuleTransition>
    <div
      class="catalogue-wrapper"
      v-if="isStructuring"
    >
      <!-- travis:for transition -->
      <ModuleTransition delay="0.1">
        <div class="catalogue-title" v-if="recoShowModule">
          <i class="iconfont tc-huodongmulupeizhi" style="font-size:1.4rem"></i>目录
        </div>
      </ModuleTransition>
      <ModuleTransition delay="0.2">
        <div class="catalogue-content" v-if="recoShowModule">
          <template v-for="(item, index) in getCatalogueList()">
            <dl
              v-if="type(item) === 'array'"
              :key="index"
              class="inline"
            >
              <dt>
                <router-link :to="item[2]">{{`${index+1}. ${item[1]}`}}</router-link>
              </dt>
            </dl>
            <dl
              v-else-if="type(item) === 'object'"
              :key="index"
            >
              <dt :id="anchorText = item.title">
                <a
                  :href="`#${anchorText}`"
                  class="header-anchor"
                >#</a>
                {{`${index+1}. ${item.title}`}}
              </dt>
              <dd>
                <router-link
                  :to="s[2]"
                  v-for="(s, i) in item.children"
                  :key="i"
                >{{`${index+1}-${i+1}. ${s[1]}`}}</router-link>
              </dd>
            </dl>
          </template>
        </div>
      </ModuleTransition>
    </div>
  </div>
</template>

<script>
//travis:for transition
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'
export default {
  data () {
    return {
      pageData: null,
      isStructuring: true
    }
  },
  // travis:for transition
  mixins: [moduleTransitonMixin],
  components: { ModuleTransition },
  created () {
    console.log('created')
    this.getPageData()

    const sidebar = this.$themeConfig.sidebar
    if (!sidebar || sidebar === 'auto') {
      this.isStructuring = false
      console.error("目录页数据依赖于结构化的侧边栏数据，请在主题设置中将侧边栏字段设置为'structuring'，否则无法获取目录数据。")
    }
  },
  methods: {
    getPageData () {
      const pageComponent = this.$frontmatter.pageComponent
      if (pageComponent && pageComponent.data) {
        this.pageData = {
          ...pageComponent.data,
          title: this.$frontmatter.title
        }
      } else {
        console.error('请在front matter中设置pageComponent和pageComponent.data数据')
      }
    },
    getCatalogueList () {
      const { sidebar } = this.$site.themeConfig
      const key = this.$frontmatter.pageComponent.data.key
      const catalogueList = sidebar[`/${key}/`]

      if (!catalogueList) {
        console.error('未获取到目录数据，请查看front matter中设置的key是否正确。')
      }

      return catalogueList
    },
    type (o) { // 数据类型检查
      return Object.prototype.toString.call(o).match(/\[object (.*?)\]/)[1].toLowerCase()
    }
  },
  watch: {
    '$route.path' () {
      this.getPageData()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
dl, dd
  margin 0
.column-wrapper
  margin-top 1rem
  display flex
  padding-bottom 2rem
  border-bottom 1px solid var(--borderColor)
  img
    width 80px
    height 80px
    border-radius 2px
    margin-right 1rem
  .column-info
    .title
      font-size 1.6rem
    .description
      color var(--textColor)
      opacity 0.8
      margin 0.5rem 0
.catalogue-wrapper
  .catalogue-title
    font-size 1.45rem
    margin 2rem 0
  .catalogue-content
    dl
      margin-bottom 1.8rem
      &.inline
        display inline-block
        width 50%
        margin-bottom 1rem
        @media (max-width $MQMobileNarrow)
          width 100%
        a
          width 100%
      &:not(.inline)
        dt
          margin-top -($navbarHeight)
          padding-top $navbarHeight
      dt
        font-size 1.1rem
        &:hover .header-anchor
          opacity 1
      dd
        margin-top 0.7rem
        font-size: 0.9rem
      a:not(.header-anchor)
        margin-bottom 0.5rem
        display inline-block
        width 50%
        @media (max-width $MQMobileNarrow)
          width 100%
</style>
