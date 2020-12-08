<template>
  <aside class="blogger-wrapper card-box">
    <div class="avatar">
      <img
        :src="blogger.avatar"
        alt="头像"
        title="看什么看~"
      />
    </div>
    <div
      class="icons"
      v-if="social && social.icons && social.icons.length"
    >
      <a
        v-for="(item, index) in social.icons"
        :key="index"
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        :style="{width: 100/social.icons.length + '%'}"
        target="_blank"
      />
    </div>
    <div class="blogger">
      <span class="name">{{blogger.name}}</span>
      <span class="slogan">{{blogger.slogan}}</span>
    </div>
    <div class="num">
      <div>
        <h3>{{$sortPosts.length}}</h3>
        <h6>Article</h6>
      </div>
      <div>
        <h3>{{$categoriesAndTags.tags.length}}</h3>
        <h6>Tag</h6>
      </div>
    </div>   
  </aside>
</template>

<script>
export default {
  computed: {
    blogger () {
      return this.$themeConfig.blogger
    },
    social () {
      return this.$themeConfig.social
    }
  }
}
</script>

<style lang='stylus'>
.blogger-wrapper
  height auto
  display inline-table
  .avatar
    display block
    margin 2rem auto 1rem
    width 6rem
    height 6rem
    border-radius 50%
    overflow hidden
    @media (max-width 900px)
      width 205px
      height 205px
    img
      width 100%
      height 100%
  .icons
    // border 1px solid var(--borderColor)
    border-top none
    height 40px
    line-height 40px
    a
      font-size 20px
      width 33%
      color var(--textColor)
      display block
      float left
      text-align center
      opacity 0.8
      &:hover
        color $accentColor
  .blogger
    margin 1.5rem
    text-align center
    .name
      font-size 1rem
      font-weight 600
      color var(--text-color)
    .slogan
      color var(--textColor)
  .num {
    display flex
    margin 0 auto 1rem
    width 80%
    > div {
      text-align center
      flex 0 0 50%
      &:first-child {
        border-right 1px solid #333
      }
      h3 {
        line-height auto
        margin 0 0 .6rem
        color var(--text-color)
      }
      h6 {
        line-height auto
        color var(--text-color)
        margin 0
      }
    }
  }
</style>
