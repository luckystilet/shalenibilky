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
            <button type="submit">Зайти</button>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Login",
        data: ()=>({
            email: '',
            password: ''
        }),
        methods: {
            ...mapActions(['login']),
            async submitHandler(){
                const formData = {
                    email: this.email,
                    password: this.password
                }
                try{
                    await this.login(formData)
                    await this.$router.push('/')
                }catch(e){}
            }
        }
    }
</script>

<style scoped>

</style>
