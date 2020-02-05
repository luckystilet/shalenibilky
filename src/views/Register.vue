<template>
    <div class="container">
        <form @submit.prevent="submitHandler">
            <div class="row">
                <label for="email">Пошта</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="row">
                <label for="password">Пароль</label>
                <input type="password" id="password" v-model="password">
            </div>
            <div class="row">
                <label for="password-2">Повторіть Пароль</label>
                <input type="password" id="password-2">
            </div>
            <div class="row">
                <label for="name">Ім'я</label>
                <input type="text" id="name" v-model="name">
            </div>

            <button type="submit">Зайти</button>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "Register",
        data: ()=>({
            email: '',
            password: '',
            name: ''
        }),
        methods: {
            ...mapActions(['register']),
            async submitHandler(){
                const formData = {
                    email: this.email,
                    password: this.password,
                    name: this.name
                }
                try{
                    await this.register(formData)
                    await this.$router.push('/')
                }catch(e){}
            }
        },
    }
</script>

<style scoped>

</style>
