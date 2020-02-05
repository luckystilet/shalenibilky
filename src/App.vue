<template>
  <div id="app">
    <Navbar></Navbar>
    <section class="s-view">
      <transition name="fade-route">
        <router-view/>
      </transition>
    </section>
    <Products/>
<!--    <Basket/>-->
<!--    <div class="scene"><div class="bg" id="bg"></div></div>-->
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Products from '@/components/Products'

export default {
    name: 'app',
    components: {Navbar, Products},
    mounted() {
        // function paralax(e){
        //     const bg = document.getElementById('bg')
        //     bg.style.transform = `translateX(${e.clientX/100*2}px)`
        // }
        // document.addEventListener('mousemove', paralax)
    }
}
</script>

<style lang="scss">
    #app{
        position: relative;
    }
  .s-view{
    background-color: rgba(255,254,235,.9);
    h1{
      padding: 30px 0;
      text-align: center;
      font-size: 56px;
    }
  }
  .fade-route{
    &-enter-active{
      transition: all ease 1.5s;
    }
    &-enter{
      opacity: 0;
    }
  }
</style>
