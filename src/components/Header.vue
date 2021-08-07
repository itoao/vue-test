<template>
    <div class ="header">
        <div class = "header-inner">
            <h1 class ="title" @click="clickSmoothScroll('#app')">ao ito</h1>
            <Nav class = "nav"></Nav>
        </div>

    </div>
</template>

<script>
import Nav from './Nav.vue'



export default{
    components:{
        Nav
    },
    methods:{
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}

</script>
