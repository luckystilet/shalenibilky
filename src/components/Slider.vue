<template>
    <div class="slider-wrapper">
        <agile
            :nav-buttons="false"
            :autoplay-speed="5000"
            :speed="1500"
            fade
            pause-on-dots-hover
            autoplay
        >
            <div
                class="slide"
                v-for="(el, idx) of 7"

            >
                <img
                    :src="require(`../img/slider/${idx+1}.jpg`)"
                    alt=""
                >
            </div>
        </agile>
    </div>
</template>

<script>
    import { VueAgile } from 'vue-agile'
    export default {
        name: "Slider",
        components: {agile: VueAgile},
        computed: {
        }
    }
</script>

<style scoped lang="scss">
    .agile {
        max-height: 600px;
        min-height: 400px;
        .slide img {
            max-height: 600px;
            width: 100%;
        }
    }
    .slider-wrapper{
        margin: 0 auto;
        width: 100vw;
        max-width: 1170px;
        height: 500px;
        max-height: calc(100vh - 70px);
        .slide{
            height: 500px;
            max-height: calc(100vh - 70px);
        }
        .slide img{
            height: 500px;
            max-height: calc(100vh - 70px);
            cursor: pointer;
        }
    }
    @media(max-width: 880px){
        max-height: 100vh;
    }
</style>
