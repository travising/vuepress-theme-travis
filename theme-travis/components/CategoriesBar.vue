<template>
  <div class="categories-wrapper card-box">
    <router-link
      to="/categories/"
      class="title iconfont tc-all-fill"
    >{{ length === 'all' ? ' 全部分类' : ' 分类' }}</router-link>

    <!-- <div class="categories">
      <router-link
        :to="`/categories/?category=${encodeURIComponent(item.key)}`"
        v-for="(item, index) in categories"
        :key="index"
        :class="{active: item.key === category}"
      >
        {{item.key}}
        <span>{{item.length}}</span>
      </router-link>
      <router-link
        to="/categories/"
        v-if="length !== 'all' && length < categoriesData.length"
        class="more"
      >更多...</router-link>
    </div> -->
    <!-- travis: modify categories bar style -->
    <ul class="category-wrapper">
      <li class="category-item" v-for="(item, index) in categories" :key="index">
        <router-link :to="`/categories/?category=${encodeURIComponent(item.key)}`">
          <span class="category-name">{{ item.key }}</span>
          <span class="post-num" :style="{ 'backgroundColor': getOneColor() }">{{ item.length }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getOneColor } from '../util/randomColor'
export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    categoriesData: {
      type: Array,
      default: []
    },
    length: {
      type: [String, Number],
      default: 'all'
    }
  },
  computed: {
    categories () {
      if (this.length === 'all') {
        return this.categoriesData
      } else {
        return this.categoriesData.slice(0, this.length)
      }
    }
  },
  methods:{
    getOneColor
  }
}
</script>

<style lang='stylus'>
.categories-wrapper
  .title
    color var(--textColor)
    opacity 1
    font-size 1.1rem
  .category-wrapper {
    list-style none
    padding-left 0
    .category-item {
      margin-bottom .5rem
      padding: .4rem .8rem;
      transition: all .5s
      border-radius .2rem
      box-shadow var(--boxShadow)
      background-color var(--mainBg)
      &:hover {
        transform scale(1.04)
        a {
          color $accentColor
        }
      }
      a {
        display flex
        justify-content: space-between
        color var(--text-color)
        .post-num {
          width 1.6rem;
          height 1.6rem
          text-align center
          line-height 1.6rem
          border-radius .2rem
          background #eee
          font-size 13px
          color #fff
        }
      }
    }
  }
</style>
<!-- vd style
.categories
    margin-top 0.6rem
    a
      display block
      padding 8px 0.3rem 7px 0.3rem
      color var(--textColor)
      opacity 0.8
      font-size 0.95rem
      line-height 0.95rem
      position relative
      transition all 0.3s
      border-bottom 1px solid var(--borderColor)
      margin-top -1px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      @media (max-width $MQMobile)
        font-weight 400
      &.more
        color $accentColor
      &:hover
        color $accentColor
        padding-left 0.6rem
        span
          opacity 0.8
      span
        float right
        background-color var(--textColor)
        color var(--mainBg)
        border-radius 8px
        padding 0 0.13rem
        min-width 1rem
        height 1rem
        line-height 1rem
        font-size 0.6rem
        text-align center
        opacity 0.6
        transition opacity 0.3s
      &.active
        background $accentColor
        color var(--mainBg)
        padding-left 0.8rem
        border-radius 1px
        border-color transparent
-->