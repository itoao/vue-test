<template>
  <div>

    <a href="#" class="nav-button" @click="clickSmoothScroll('#about')">About</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#skill')">Skill</a>
    <router-link to="/Work">Works</router-link>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#contact')">Contact</a>
  </div>
</template>


<script>
export default {
  methods: {
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
/*.nav-button{
  padding:10px;
  text-decoration: none;
  border-radius: 5px;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke;
}*/
.nav-button{
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.25em 10px;
  text-decoration: none;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: #333;
  background-color: rgba(91, 92, 91, 0.288);
  border-radius: 30px;
  transition: 0.4s;
}
.nav-button:hover{
  background-color: #333;
  color: white;
}
</style>