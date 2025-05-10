<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
    recipe_id: {
        type: String,
        required: true
    }
})
const route = useRoute()
const recipeId = ref(route.params.recipe_id);

const recipe = ref({
    "recipe_id": 1,
    "name": "Spaghetti Carbonara",
    "ingredients": [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "2 cloves garlic",
      "Salt",
      "Black pepper"
    ],
    "instructions": [
      "Boil spaghetti in salted water.",
      "Fry pancetta and garlic until crispy.",
      "Beat eggs with cheese, salt and pepper.",
      "Drain pasta and mix quickly with pancetta and egg mixture.",
      "Serve hot."
    ],
    "prep_time": 10,
    "cook_time": 20,
    "votes": 0,
    "servings": 2,
    "tags": ["italian", "pasta", "quick"],
    "created_by": "chef_anna",
    "created_at": "2025-04-23T14:00:00Z",
    "recipe_img_url": "https://example.com/images/spaghetti-carbonara.jpg",
    "difficulty": 2
})

const likes = ref(0);

const recipeName = ref("recipeName");
const recipeImage = ref("recipeImage");
const quickView = ref("quickView");
const recipeBasicInfo = ref("recipeBasicInfo");
const recipeDetails = ref("recipeDetails");

</script>

<template>
    <h2 class="recipeName">{{ recipe.name }}</h2>
    <img class="recipeImage"/>
    <section class="quickView">
        <h3>Quick View</h3>
        <section class="recipeBasicInfo">
            <section class="chefDetails">
                <p>Posted by: {{ recipe.created_by }}</p>
                <p>Prep: {{ recipe.prep_time }} minutes</p>
                <p>Cook: {{ recipe.cook_time }} minutes</p>
            </section>
            <section class="likesSection">
                <p>Likes: {{ likes }}</p>
                <button @click="likes++">+1</button>
            </section>
        </section>
    </section>
    <section class="recipeDetails">
        <section>
            <h3>Instructions</h3>
            <ol>
                <li v-for="instruction in recipe.instructions">
                    {{ instruction }}
                </li>
            </ol>
        </section>
        <section>
            <h3>Ingredients</h3>
            <ul>
                <li v-for="ingredient in recipe.ingredients">
                    {{ ingredient }}
                </li>
            </ul>
            <button>Add to shopping list</button>
        </section>
    </section>
    <router-link :to="{ name: 'RecipeList' }">
        Back to Recipes
    </router-link>
</template>

<style scoped>
.recipeName {
    font-size: 2.5rem;
    text-align: center;
}
.recipeImage {
    height: 400px;
    width: 400px;
    border: 1px solid #87bba2;
    display: block;
    margin: auto;
}
.quickView {
    border: 1px solid #87bba2;
    margin: .5rem 0;
}
.recipeBasicInfo {
    display: flex;
    justify-content: space-between;
    padding: .5rem;
}
.recipeDetails {
    display: flex;
    justify-content: space-around;
}
</style>