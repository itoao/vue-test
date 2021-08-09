<template>
    <div class ="header">
        <div class = "header-inner">
          <router-link to='/'>
            <h1 class ="title" @click="clickSmoothScroll('#app')">ao ito</h1>
          </router-link>
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
<style>
.header{
  background-color:#ced3d6;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}
.header-inner{
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
}
.title{
  padding: 0.25em 10px;
  margin: 8px;
  cursor: pointer;
  background-color: rgba(91, 92, 91, 0.288);
  border-radius: 30px;
}
.nav{
  margin: auto ;
  margin-right: 0;
  padding: auto;
}
</style>
