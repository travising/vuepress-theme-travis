export default {
  data () {
    return {
      recoShowModule: false
    }
  },
  mounted () {
    console.log("mt-mounted")
    this.recoShowModule = true
  },
  destroyed () {
    console.log("mt-destroyed")
    this.recoShowModule = false
  }
}
