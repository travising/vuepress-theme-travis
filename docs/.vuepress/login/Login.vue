<template>
  <div class="login-form">
    <div style="margin:0px 0px 30px;text-align:left;">
      <img :src='imgUrl' style="width: 7rem;">
    </div>
    <div class="form-header">
      <i class="iconfont tc-key tc-icon"></i>Enter password
    </div>
    <div>
      <input type="password" class="form-control" v-model="password">
    </div>

    <div class="btn-row">
      <button class="btn" @click="login">
        OK
      </button>
    </div>
  </div>
</template>

<script>
import { STORAGE_KEY } from './helper'

export default {
  data () {
    return {
      imgUrl: '/img/logo-nav.png',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.password == 'chen') {
        const data = JSON.stringify({
          name: this.username,
          time: new Date().getTime()
        })
        window.localStorage.setItem(STORAGE_KEY, data)
        this.$emit('close', true)
      } else {
        this.$dlg.alert('请输入正确的口令！', {
          messageType: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.login-form
  margin: -0.8rem 1rem 
  display flex
  flex-direction column
  box-sizing border-box
  .btn-row
    margin-top 1.3rem
  .btn
    padding 0.7rem 2rem
    outline none
    background-color #000000
    color white
    font-weight 600
    width 100%
    border 0
    border-radius 2px
    cursor pointer
    &:hover
      background-color #666666
  .form-header
    color #000000
    margin-bottom 0.3rem
    font-weight 600
  .form-control
    padding 0.6rem
    border 0px
    width 100%
    margin-bottom 1rem
    box-sizing border-box
    border-radius 2px
    outline none
    transition border 0.2s ease
    background-color #cccccc
    &:focus
      border 0px
  .tc-icon
    color #000000
    font-size 14px
</style>