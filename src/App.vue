<template>

  <div id="app">
    <header></header>
    <router-view />
  </div>

</template>
<script>
import header from "./components/header";
export default {
  components: {
    header,
  },
};
</script>




<script src="https://cdn.jsdelivr.net/npm/vue-particles-use@1.0.1/dist/vue-particles-use.umd.min.js"></script>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import 'normalize.css'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
    About,
    Skill,
    Work,
    Contact
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#app{
  font-family: 'Open Sans', sans-serif;
}
#top{
  position: relative;
  /*background-image: url(./assets/yoru2.jpg);*/
  background-color:#03111a;
  background-size: cover;
  height: 100vh;
}
:hover .target {
			transform: rotateZ( 360deg ) ;
		}
#main{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  font-family: 'Open Sans', sans-serif;
}
.particles{
  z-index: 1;
  height: 100vh;
}
.res{
  display: none;
  background-color: #03111a;
}
.res-title{
  background-color:#03111a;
  padding: 10px;
  margin: 0;
  color: whitesmoke;
}
.vue-typer .custom.char{
  color: aliceblue;
}
.nav-res{
  display: none;
}
.nav-icon{
  font-size: 1.5em;
}
.comment{
  margin:5px 0;
  font-weight: 500;
  color: whitesmoke;
}
.link-content{
  color: whitesmoke;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}
.top-text{
  color: whitesmoke;
  font-size: 50px;
}
.icon{
  font-size: 0.8em;
}
.text{
    font-weight: 500;
}
.content-title {
  padding: 120px 0 20px 0;
  margin: 50px 20% 100px 20%;
  position: relative;
  font-size: 2em;
  color: #333;
  border-bottom: rgba(12, 50, 78, 0.4) 3px solid;
}
@media screen and (max-width: 1200px) {
  .top-text{
    font-size: 35px;
  }
}
@media screen and (max-width: 768px){
  .top-text{
    font-size: 25px;
  }
  #header{
    display: none;
  }
  .res{
    display: contents;
    background-color: #03111a;
  }
  .nav-res{
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  background-color: #03111a;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.content-title{
  margin-bottom: 30px;
}
}
@media screen and (max-width: 450px) {
  .top-text{
    font-size: 11px;
  }
}




</style>

