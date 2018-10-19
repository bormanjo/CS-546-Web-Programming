const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.all("/", function(req, res, next) {
    console.log('%s %s %s', req.method, req.originalUrl, req.path)
    next()
})

// Responds with an array of all recipes in the format of {_id: ..., title: ...}
router.get("/", async (req, res) => {
    console.log("GET request received to retrieve all recipes");
    try {
        // Get all recipes in the Colleciton
        const recipes = await recipeData.getAllRecipes();
        // Return all recipes
        res.json(recipes);
    } catch (e) {
        res.status(404).json({error: e})
    }
});


// Responds with the full content of the specified recipe
router.get("/:id", async (req, res) => {
    console.log(`GET request received to retrieve recipe of id ${req.params.id}`);
    try {
        console.log(req.params.id)
        // Get the recipe for the given id
        const recipe = await recipeData.getRecipeById(req.params.id);
        // Return the recipe
        res.json(recipe)
    } catch (e) {
        res.status(404).json({error: e})
    }
});

// Creates a recipe with the suplied data in the request body and returns the new recipe
router.post("/", async (req, res) => {
    console.log(`POST request received to add new recipe`);
    const recipe = req.body; // Get recipe data

    try {
        // Add the recipe data
        console.log("recipe: ")
        console.log(recipe.title)
        console.log(recipe.ingredients)
        console.log(recipe.steps)
        const newRecipe = await recipeData.addRecipe(recipe.title, recipe.ingredients, recipe.steps);
        console.log("added recipe: ")
        console.log(newRecipe)

        // Return the new recipe
        res.json(newRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

// Updates the specified recipe by replacing the recipe with the new content and returns the updated recipe
router.put("/:id", async (req, res) => {
    console.log(`PUT request received to replace recipe of id ${req.params.id} with new recipe`);

    const recipe = req.body; // Get recipe data

    // Check that ID exists
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(500).json({error: e});
    }

    // Replace data
    try {

        // Create an object containing the necessary data
        const {title, ingredients, steps} = recipe;
        const replacementData = {
            title: title, 
            ingredients: JSON.parse(ingredients), 
            steps: JSON.parse(steps)
        };

        // Replace the recipe with the corresponding data
        const updatedRecipe = recipeData.replaceRecipe(req.params.id, replacementData);

        // Return the updated recipe
        res.json(updatedRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

// Updates the specified recipe with only the supplied changes and returns the updated recipe
router.patch("/:id", async (req, res) => {
    console.log(`PATCH request received to update recipe of id ${req.params.id}`);

    const recipe = req.body; // Get recipe data

    // Check that ID exists
    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(500).json({error: e});
    }

    // Replace data
    try {
        // Create an object containing the necessary data
        const {title, ingredients, steps} = recipe;
        const updateData = {
            title: title, 
            ingredients: JSON.parse(ingredients), 
            steps: JSON.parse(steps)
        };

        // Update the id with the updateData
        const updatedRecipe = recipeData.updateRecipe(req.params.id, updateData);

        // Return the updateRecipe
        res.json(updatedRecipe);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

// Delets a recipe and returns nothing
router.delete("/:id", async (req, res) => {
    console.log(`DELETE request received to remove recipe of id ${req.params.id}`);

    try {
        await recipeData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({error: e});
    }

    try{
        await recipeData.removeRecipe(req.params.id);
    } catch (e) {
        res.status(500).json({error: e});
    }
});

module.exports = router;