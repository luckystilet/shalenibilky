<template>
    <nav>
        <div class="container">
            <router-link to="/"  class="logo">
                <img src="../../img/logo.png" alt="">
            </router-link>
            <ul
                class="menu-main__list"
                :class="{'menu-main__list--open': toggle}"
                @click="toggle=!toggle"
            >
                <router-link
                    class="menu-main__item"
                    v-for="(link, idx) in links"
                    tag="li"
                    :key="idx"
                    :to="link.url"
                >
                    <a class="btn" href="#">{{link.title}}</a>
                </router-link>
            </ul>
            <a class="tel" href="tel:0681520971">(068) 152-09-71</a>
            <div class="auth">
                <router-link tag="button" to="/register" class="auth__item auth__item--create">Зареєеструватись</router-link>
                <router-link tag="button" to="/login" class="auth__item auth__item--login">Увійти</router-link>
            </div>
            <div class="hamburger__wrapper">
                <button
                        class="hamburger"
                        @click="toggle=!toggle"
                        :class="{'hamburger--close': toggle}"
                >
                    <div class="hamburger__line">
                        <div class="hamburger-line__dot-container"></div>
                    </div>
                    <div class="hamburger__line">
                        <div class="hamburger-line__dot-container"></div>
                    </div>
                    <div class="hamburger__line">
                        <div class="hamburger-line__dot-container"></div>
                    </div><a class="hamburger__overlay"></a>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data: ()=>({
            links: [
                {url: '/shop', title: 'Магазин'},
                {url: '/about', title: 'Про нас'},
                {url: '/delivery', title: 'Доставка'},
                {url: '/cart', title: 'Кошик'},
            ],
            toggle: false
        }),
        methods: {
            async logout(){
                await this.$store.dispatch('logout')
            }
        },
    }
</script>

<style scoped lang="scss">
    nav{
        background-color: #EEEFAB;
        height: 75px;
        margin-bottom: 10px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        .container{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 7px 20px 3px;
        }
    }
    .tel{
        font-size: 2.2rem;
        white-space: nowrap;
    }
    .menu-main{
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        &__link{
            display: block;
            font-size: 1.6rem;
            padding: 5px 15px;
            border-radius: 5px;
            background-color: #dddddd;
            white-space: nowrap;
            transition: color .15s, border .15s, background-color .15s;
            border: 2px solid #DB7449;
            &:hover{
                color: #ffffff;
                background-color: #db7449;
                border: 2px solid #ffffff;
            }
        }
    }
    li{
        margin: 0 5px;
        &:first-child{
            margin-left: 0;
        }
        &:last-child{
            margin-right: 0;
        }
    }
    h1{
        margin-right: 100px;
    }
    .logo{
        display: block;
        img{
            max-height: 60px;
            margin-right: 30px;
            display: block;
        }
    }
    /*############### Hamburger #############*/
    .hamburger{
        position: relative;
        width: 45px;
        height: 45px;
        cursor: pointer;
        border-radius: 5px;
        margin-right: 5px;
        &__wrapper{
            position: absolute;
            top: 5px;
            right: 5px;
            display: none;
        }
        &__line{
            position: absolute;
            height: 2px;
            background-color: #fff;
            width: 20px;
            border-radius: 4px;
            left: 16px;
            z-index: 2;
            transition-delay: .2s;
            transition: all .4s ease-in-out;
            pointer-events: none;
            &:nth-child(1){
                top: 13px;
            }
            &:nth-child(2){
                top: 21px;
            }
            &:nth-child(3){
                top: 29px;
            }
        }
        &__overlay{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #8D654E;
            border: solid 2px #fff;
            border-radius: 5px;
            z-index: 1;
            transform: rotateZ(0deg);
            transition: border ease-in-out .6s, transform ease-in-out .6s, border-radius ease-in-out .6s, background-color ease-in-out .6s, box-shadow ease-in-out .6s;
            box-shadow: inset 7px 7px 5px -5px rgba(255, 255, 255, 0.4), 4px 4px 7px -2px black;
            &:hover{
                box-shadow: 4px 4px 7px -2px black;
            }
            &:active{
                box-shadow: inset 7px 7px 5px -5px rgba(0, 0, 0, 0.4);
            }
        }
        &--close{
            .hamburger__line{
                height: 4px;
                top: 20px;
                width: 30px;
                background-color: #000;
                left: 8px;
                pointer-events: none;
                &:nth-child(1){
                    transform: rotateZ(45deg);
                }
                &:nth-child(2){
                    opacity: 0;
                }
                &:nth-child(3){
                    transform: rotateZ(-45deg);
                }
            }
            .hamburger__overlay{
                border: solid 2px #000;
                transform: rotateZ(300deg);
                border-radius: 50%;
                background-color: #710C1C;
                box-shadow: inset 3px 8px 5px -5px rgba(255, 255, 255, 0.4), 1px 2px 7px -2px black;
                &:hover{
                    box-shadow: 1px 2px 7px -2px black;
                }
                &:active{
                    box-shadow: inset 3px 8px 5px -5px rgba(0, 0, 0, 0.4)!important;
                }
            }
            .hamburger-line__dot-container:before {
                opacity: 0;
            }
            .hamburger__overlay:hover {
                box-shadow: 1px 2px 7px -2px black;
            }
        }
        &-line{
            &__dot-container{
                position: relative;
                &:before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -7px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #fff;
                    transform: translateY(-40%);
                    transition: opacity linear .2s;
                }
            }
        }
    }
    /*############### Hamburger #############*/
    .auth{
        display: flex;
        flex-direction: column;
        &__item{
            font-size: 1.4rem;
            font-weight: bold;
            padding: 2px 15px;
            /*border: 1px solid #000000;*/
            /*border-radius: 5px;*/
        }
    }
    @media(max-width: 880px){
        .tel{
            margin-right: 10px;
        }
        .auth{
            margin-right: 40px;
        }
        .hamburger__wrapper{
            display: block;
            flex-shrink: 0;
        }
        .menu-main__list{
            position: absolute;
            top: 75px;
            left: 0;
            width: 95%;
            flex-direction: column;
            background-color: #8d654e;
            transform: translateX(-900px);
            transition: all .3s ease-in-out;
            z-index: 9999;
            &--open{
                transform: translateX(0);
            }
        }
        .menu-main__link{
            line-height: 40px;
            background-color: transparent;
        }
        .menu-main__item{
            margin: 0;
            &:nth-child(odd){
                background-color: rgba(0,0,0,.1);
            }
        }
    }
    @media (max-width: 667px){
        .auth{
            display: none;
        }
    }
    @media(max-width:480px){
        .tel{
            display: none;
        }
    }
</style>
