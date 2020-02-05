import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        products: [
            {id: 1,price250: 75, price500: 150, price1000: 280, link: '/brazilia-santos', title: 'Бразилія Сантос', imgSrc: 'brazilia-santos.jpg'},
            {id: 2,price250: 70, price500: 145, price1000: 270, link: '/efiopia-sidamo', title: 'Ефіопія Сідамо', imgSrc: 'efiopia-sidamo.jpg'},
            {id: 3,price250: 100, price500: 175, price1000: 325, link: '/gonduras', title: 'Гондурас', imgSrc: 'gonduras.jpg'},
            {id: 4,price250: 80, price500: 160, price1000: 300, link: '/india', title: 'Індія', imgSrc: 'indiya.jpg'},
            {id: 5,price250: 74, price500: 149, price1000: 299, link: '/keniya-karibu', title: 'Кенія Карібу', imgSrc: 'keniya-karibu.jpg'},
            {id: 6,price250: 74, price500: 149, price1000: 299, link: '/kolumbia-supremo', title: 'Колумбія Супремо', imgSrc: 'kolumbia-supremo.jpg'},
            {id: 7,price250: 74, price500: 149, price1000: 299, link: '/micnui-gorishok', title: 'Міцний горішок', imgSrc: 'micnui-gorishok.jpg'},
            {id: 8,price250: 100, price500: 185, price1000: 350, link: '/nikaragua', title: 'Нікарагу', imgSrc: 'nikaragua.jpg'},
            {id: 9,price250: 80, price500: 145, price1000: 270, link: '/zaryad-bodrosty', title: 'Заряд бодрості', imgSrc: 'zaryad-bodrosty.jpg'},
        ],
        cart: []
    },
    actions: {},
    mutations: {
        updateCart(state, param){
            const temp = state.cart
            state.cart = []
                // Проверка, есть ли такой товар и если есть - переназначаем количество заказа для переданного веса
                const idOfProduct = temp.findIndex((el, idx)=>{
                    if(el.id==param.id){
                        temp[idx][`amount${param.weight}`] = param.amount
                        return true
                    }
                    return false
                })
            // Если товара нет - формируем его из стейта и вписываем количество, для необходимого веса.
                if(idOfProduct === -1){
                    const newProduct = state.products.find((el)=>{
                        return el.id === param.id
                    })
                    newProduct[`amount${param.weight}`] = param.amount
                    temp.push(newProduct)
                }
            state.cart = temp.slice()
            console.log("state",   state.cart    );
        },


        deleteProduct(state, param){
            const idx = state.cart.findIndex((el)=>el.id===param.id)
            // Если такой товар есть в корзине
            if(idx!== -1){
                const el = state.cart[idx]
                if(param.weight === 'amount1000'){
                    if((el['amount500'] === 0 || el['amount500'] === undefined) && (el['amount250'] === 0  || el['amount250'] === undefined)){
                        el['amount1000'] = 0
                        state.cart.splice(idx, 1)
                    }else{
                        el['amount1000'] = 0
                        const tempObj = Object.assign(el)
                        state.cart[idx] = tempObj
                    }
                }
                else if(param.weight === 'amount500'){
                    if((el['amount1000'] === 0 || el['amount1000'] === undefined) && (el['amount250'] === 0 || el['amount250'] === undefined)){
                        el['amount500'] = 0
                        state.cart.splice(idx, 1)
                    }else{
                        el['amount500'] = 0
                        const tempObj = Object.assign(el)
                        state.cart[idx] = tempObj
                    }
                }else{
                    if((el['amount500'] === 0 || el['amount500'] === undefined) && (el['amount1000'] === 0 || el['amount1000'] === undefined)){
                        el['amount250'] = 0
                        state.cart.splice(idx, 1)
                    }else{
                        el['amount250'] = 0
                        const tempObj = Object.assign(el)
                        state.cart[idx] = tempObj
                    }
                }
            }
            state.cart = state.cart.slice()
            console.log("DELLL",    state.cart   );
        }
    },
    getters: {
        products: state => state.products,
        cart: state => state.cart
    },
    modules: {auth}
})
