<script setup>
const props = defineProps({
    recipe_id: {
        type: String,
        required: true
    },
    recipe_name: {
        type: String,
        required: true
    },
    // recipe: {
    //     type: String,
    //     required: true
    // },
    mounted() {
        console.log(this.recipe)
    }
})
</script>

<template>
    <!-- {{console.log(recipe_prep_time)}} -->
    <p>Single Recipe Component</p>
    <div>
        Recipe {{ recipe_id }}
    </div>
    <p>{{ recipe || "not working :(" }}</p>
    <router-link :to="{ name: 'RecipeList' }">
        Recipes
    </router-link>
</template>

<style scoped>
</style>