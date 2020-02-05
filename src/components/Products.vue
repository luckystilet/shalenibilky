<template>
    <section class="products">
        <div class="products__inner">
            <Card
                    v-for="el of this.$store.getters.products"
                    :el="el"
            />
        </div>
    </section>
</template>

<script>
    import Card from './Card'
    export default {
        name: "products",
        components: {Card}
    }
</script>

<style scoped lang="scss">
    .products{
        display: flex;
        justify-content: center;
        &__inner{
            max-width: 1200px;
            background-color: rgba(255,254,235,.9);
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding-top: 25px;
            flex-grow: 0;
         }
    }
</style>
