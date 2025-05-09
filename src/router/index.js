import { createRouter, createWebHistory } from "vue-router";
import RecipeList from "../components/RecipeList.vue";
import SingleRecipe from "../components/SingleRecipe.vue";

const routes = [
    { path: '/recipes', name: 'RecipeList', component: RecipeList, props: true },
    { path: '/recipes/:recipe_id', name: 'SingleRecipe', component: SingleRecipe, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;