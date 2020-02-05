<template>
    <div class="container">
        <transition name="app-fade" mode="out-in">
            <div class="cart__wrapper" v-if="cart.length">
                <h1>Ваше замовлення: </h1>
                <transition-group tag="ul" class="cart__list" name="app-fade" mode="out-in">
                    <li
                        class="cart-item"
                        v-for="(product, idx) in cart"
                        :key="idx"
                    >
                        <h3 class="cart-item__title">{{product.title}}</h3>
                        <transition-group name="app-fade" mode="out-in" class="cart-item__body" tag="div">
                            <div class="cart-item__1000" v-if="product.amount1000" :key="1000">
                                ### 1000 ###
                                <div class="cart-item__amount">{{product.amount1000}}</div>
                                <div class="cart-item__price">{{product.price1000}}</div>
                                <div class="cart-item__total">{{product.amount1000*product.price1000}}</div>
                                <div class="cart-item__delete" @click="deleteProduct({id: product.id, weight: 'amount1000'})"></div>
                            </div>
                            <div class="cart-item__500" v-if="product.amount500" :key="500">
                                ### 500 ###
                                <div class="cart-item__amount">{{product.amount500}}</div>
                                <div class="cart-item__price">{{product.price500}}</div>
                                <div class="cart-item__total">{{product.amount500*product.price500}}</div>
                                <div class="cart-item__delete" @click="deleteProduct({id: product.id, weight: 'amount500'})"></div>
                            </div>
                            <div class="cart-item__250" v-if="product.amount250" :key="250">
                                ### 250 ###
                                <div class="cart-item__amount">{{product.amount250}}</div>
                                <div class="cart-item__price">{{product.price250}}</div>
                                <div class="cart-item__total">{{product.amount250*product.price250}}</div>
                                <div class="cart-item__delete" @click="deleteProduct({id: product.id, weight: 'amount250'})"></div>
                            </div>
                        </transition-group>
                    </li>
                </transition-group>
                <div class="cart__total">Всього: {{totalPrice}}</div>
            </div>
            <p v-else class="cart__is-empty">Кошик ще порожній :(</p>
        </transition>
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        name: "Cart",
        computed: {
            ...mapGetters(['cart']),
            totalPrice(){
                return this.cart.reduce((summ, product)=>{
                    if(product.amount1000){
                        summ+=product.amount1000*product.price1000
                    }
                    if(product.amount500){
                        summ+=product.amount500*product.price500
                    }
                    if(product.amount250){
                        summ+=product.amount250*product.price250
                    }
                    return summ
                },0)
            }
        },
        methods: {
            ...mapMutations(['deleteProduct'])
        },
    }
</script>

<style scoped lang="scss">
 .cart{
     &__list{
         padding: 10px;
         border: 1px solid #000;
         display: flex;
         flex-direction: column;
     }
     &__is-empty{
         text-align: center;
         font-size: 2.4rem;
     }
     &-item{
         margin-top: 10px;
         border: 1px solid #000;
         /*transition: all .3s;*/
         &__delete{
             width: 15px;
             height: 15px;
             top: 5px;
             right: 5px;
             position: absolute;
             background-image: url('../img/icons/icon-close.svg');
             background-repeat: no-repeat;
             background-size: cover;
             cursor: pointer;
         }
         &__1000{
             position: relative;
         }
         &__500{
             position: relative;
         }
         &__250{
             position: relative;
         }
     }
     /*.cart{*/
     /*    &-enter-active, &-leave-active{*/
     /*        transition: all 10s ease-in;*/
     /*    }*/
     /*    &-enter, &-leave-to{*/
     /*        opacity: 0;*/
     /*    }*/
     /*}*/

     /*.fade-enter-active, .fade-leave-active {*/
     /*    transition: all ease .3s;*/
     /*}*/

     /*.fade-enter, .fade-leave-to {*/
     /*    opacity: 0;*/
     /*}*/
 }
</style>
