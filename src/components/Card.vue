<template>
  <div class="card__wrapper">
    <div class="card">
      <div class="card__top">
        <router-link :to="el.link" tag="h3" class="card__title">{{el.title}}</router-link>
        <div class="card__img-container">
          <router-link tag="a" :to="el.link" class="card__img-link">
            <img
              class="card__img"
              :src="require(`../img/products/${el.imgSrc}`)"
              :alt="el.title">
          </router-link>
          <ul class="card__img-description">
            <li>Кислинка: 2/5</li>
            <li>Гірчинка: 4/5</li>
            <li>Міцність: 5/5</li>
          </ul>
        </div>
      
      </div>
      <div class="card__body">
        <div class="card__price"><span>Ціна: </span><span ref="price"></span><span> грн/шт</span></div>
        <div class="card__order">
          <div class="w65 ns">
            <dropdown
              :options="arrayOfSize"
              :selected="{name: 1000}"
              @updateOption="updateWeightValue($event)"
            >
            </dropdown>
            <span> г</span>
          </div>
          <div>
            <dropdown
              :options="arrayOfObjects"
              :selected="{name: 1}"
              @updateOption="updateAmountValue($event)"
            >
            </dropdown>
            <span> шт</span>
          </div>
        </div>
        <div class="card__row">
          <div class="btn--order" @click="pushToTheCart">У кошик</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dropdown from './Dropdown'
  import {mapMutations} from 'vuex'
  
  export default {
    name: "card",
    props: ['el'],
    data: () => ({
      arrayOfSize: [{name: 1000}, {name: 500}, {name: 250}]
    }),
    computed: {
      productAmount() {
        return {amount: 1, weight: 1000, id: this.el.id}
      },
      arrayOfObjects() {
        const arrayOfObjects = []
        for (let i = 1; i <= 50; i++) {
          const obj = {
            name: i
          }
          arrayOfObjects.push(obj)
        }
        return arrayOfObjects
      }
    },
    methods: {
      ...mapMutations(['updateCart']),
      updateAmountValue(event) {
        this.productAmount.amount = event.name
      },
      updateWeightValue(event) {
        this.productAmount.weight = event.name
        // Установка цены, зависимо от веса
        this.$refs.price.innerText = this.el[`price${event.name}`]
      },
      pushToTheCart() {
        this.updateCart(this.productAmount)
      }
    },
    components: {Dropdown},
    mounted() {
      // Установка цены, зависимо от веса
      this.$refs.price.innerText = this.el[`price1000`]
    },
  }
</script>









<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    width: 270px;
    /*height: 350px;*/
    margin-bottom: 20px;
    padding: 10px 10px 20px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px dashed #000;
    transition: all .2s ease;
    
    &__top {
      border-bottom: 1px solid #999;
    }
    
    &__body {
      margin-top: auto;
      padding-top: 10px;
    }
    
    &__wrapper {
      text-align: center;
      padding: 0 15px;
    }
    
    &__title {
      font-size: 2.4rem;
      font-weight: bold;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
      cursor: pointer;
      -webkit-text-stroke: 1px #DB7449;
    }
    
    &__img {
      &-container {
        display: flex;
      }
      
      &-description {
        margin-top: 20px;
        
        li {
          font-size: 1.4rem;
        }
      }
      
      &-link {
        margin-right: 10px;
      }
    }
    
    &__order {
      display: flex;
      justify-content: space-around;
      margin-bottom: 15px;
    }
    
    &__price {
      margin-bottom: 10px;
    }
    
    &__row {
      display: flex;
      justify-content: center;
    }
  }
  
  .card:hover {
    /*transform: scale(1.05);*/
    box-shadow: 0 5px 10px rgba(0, 0, 0, .21), 0 10px 20px 0 rgba(0, 0, 0, .1);
  }
  
  .card__top {
    background-color: #fff;
  }
  
  .card img {
    max-width: 100px;
  }
  
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    font-weight: bold;
    padding: 5px 15px;
    color: #f3f3f3;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    transition: all .3s;
    border: 3px solid #266B0F;
    text-shadow: 1px 1px 1px rgba(0,0,0,.6);
    background: linear-gradient(to bottom, rgba(255,196,86,1) 0%,rgba(230,170,70,1) 15%,rgba(230,170,70,1) 85%,rgba(255,196,86,1) 100%);
    box-shadow: 3px 3px 6px -2px rgba(0, 0, 0, 0.3);
    
    &:hover {
      color: #85CC00;
      background: #f3f3f3;
      border: 3px solid #266B0F;
    }
    
    &:active {
      color: #80C000;
      box-shadow: inset 6px 6px 5px -6px rgba(0, 0, 0, 0.6);
      border: 3px solid #266B0F;
    }
    &--order{
      display: inline-block;
      text-decoration: none;
      padding-left: 40px;
      padding-right: 65px;
      height: 40px;
      line-height: 42px;
      color: #fefefe;
      font-size: 18px;
      font-weight: 600;
      text-shadow: 0 1px 1px rgba(0,0,0,0.3);
      border: none;
      border-radius: .5em;
      background: rgb(134,206,0);
      background: -moz-linear-gradient(left, rgba(134,206,0,1) 0%, rgba(84,130,0,1) 100%);
      background: -webkit-linear-gradient(left, rgba(134,206,0,1) 0%,rgba(84,130,0,1) 100%);
      background: linear-gradient(to right, rgba(134,206,0,1) 0%,rgba(84,130,0,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#86ce00', endColorstr='#548200',GradientType=1 );
      position: relative;
      box-shadow: 0.1em 0.15em 0.15em rgba(0,0,0,0.5);
      background-size: 200%;
      cursor: pointer;
      user-select: none;
      text-align: center;
    }
  }
</style>
