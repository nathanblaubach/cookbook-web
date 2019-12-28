class DataStore {
  constructor() {
    this.data = require("./data.json");
  }
  getCategories() {
    return this.data.categories;
  }
  getRecipes() {
    return this.data.recipes;
  }
  getRecipe(id) {
    return this.data.recipes.filter(recipe => recipe.id === id)[0];
  }
  saveRecipe(recipe) {
    console.log(recipe);
    alert('This is a readonly file');
  }
}

export default DataStore;
