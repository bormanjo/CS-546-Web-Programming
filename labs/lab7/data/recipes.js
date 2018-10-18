const MongoCollections = require('../config/mongoCollections');     // Import the collections obj
const recipes = MongoCollections.recipes;                           //   specifically the recipes collection
const uuid = require('node-uuid');                                  // Import the UUID module

// Define the set of methods to export
const exportedMethods = {

    // GET
    async getAllRecipes() {
        /* Returns an array of all recipes (ID and title only) in the collection */

        const recipeCollection = await recipes();

        // Return just the _id and title fields
        return await recipeCollection.find({}, {_id: 1, title: 1}).toArray();
    },

    // GET
    async getRecipeById(id) {
        /* Returns the recipe entry for the given ID, if it exists */

        if (!id) throw "No ID provided.";

        const recipeCollection = await recipes();
        const recipe = await recipeCollection.find({_id: id}).toArray();

        if (!recipe) throw "No recipe found for the given ID";

        return recipe;
    },

    // POST
    async addRecipe(title, ingredients, steps) {
        /* Adds a recipe to to the collection. Returns the recipe after adding. 
        
           Expects:
            - title to be a string
            - ingredients to be an array
            - steps to be an array
        */

        if (typeof title !== "string") throw "No title provided";
        
        if (!Array.isArray(ingredients)){
            ingredients = [];
        }

        if (!Array.isArray(steps)){
            steps = [];
        }

        const recipeCollection = await recipes();

        // Define a new recipe object
        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps
        };

        // Add that recipe
        const newInsertInformation = await recipeCollection.insertOne(newRecipe);
        const newId = newInsertInformation.insertedId;

        return await this.getRecipeById(newId);
    },

    // PATCH
    async updateRecipe(id, updatedRecipe) {
        /* Updates the recipe for the given ID with the updateRecipe object
        
           Expects:
            - updatedRecipe to be an object with possible attributes: title, ingredients, steps
        */
        const recipeCollection = await recipes();

        if (updatedRecipe === null || typeof updatedRecipe !== "object"){
            throw "The provided recipe is invalid";
        }

        const updatedRecipeData = {};

        // If title, ingredients or steps are defined, add them to the update object
        if(updatedRecipe.title){
            updatedRecipeData.title = updatedRecipe.title;
        }
        if(updatedRecipe.ingredients){
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }
        if(updatedRecipe.steps){
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        // Create the mongo Update cmd
        let updateCommand = {
            $set: updatedRecipeData
        };

        // Create the mongo query cmd
        const query = {
            _id: id
        };

        // Run the query and execute the update cmd
        await recipeCollection.updateOne(query, updateCommand);

        // Return the updated entry
        return await this.getRecipeById(id);
    },

    // DELETE
    async removeRecipe(id) {
        /* Removes the recipe for the given ID in the collection */

        const recipeCollection = await recipes();
        const deletionInfo = await recipeCollection.removeOne({_id: id});

        if (deletionInfo.deletedCount === 0){
            throw `Could not delete post with ID of ${id}`;
        }
    },

    // PUT
    async replaceRecipe(id, replacementRecipe) {
        /* Replaces the existing reciped for the given ID with the replacementRecipe and
           returns the replaced recipe
           
           Expects:
            - replacementRecipe to be an object with attributes: title, ingredients, steps
        */

        if (replacementRecipe !== null && typeof replacementRecipe === "object") {
            throw 'No replacement recipe provided';
        }

        if(!replacementRecipe.title) throw "No title provided";
        if(!replacementRecipe.ingredients) throw "No ingredients provided";
        if(!replacementRecipe.steps) throw "No steps provided";

        const replacedRecipe = await this.updateRecipe(id, replacementRecipe.title, replacementRecipe.ingredients, replacementRecipe.steps);
        
        return replacedRecipe;
    }
};

module.exports = exportedMethods;