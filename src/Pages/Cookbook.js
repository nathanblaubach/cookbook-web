import React            from 'react';
import { Link }         from 'react-router-dom';
import { DataStore }    from '../Data/DataStore';
import { SearchHeader } from '../Resources/Headers';
import Categories       from '../Resources/Categories';
import Card             from '../Resources/Card';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    this.state = {
      categories: dataStore.getCategories(),
      recipes: dataStore.getRecipes(),
      checkedCategories: [],
      searchString: "",
      showCategories: false,
    }
    this.updateSearchString = this.updateSearchString.bind(this);
  }

  toggleCategoryVisibility() {
    const shouldShow = !this.state.showCategories;
    this.setState({ showCategories: shouldShow });
  }

  updateSearchString(event) {
    this.setState({ searchString: event.target.value });
  }

  handleCategorySelectionChange(i) {
    const updatedCategories = this.state.checkedCategories.includes(i)
      ? this.state.checkedCategories.filter(cat => cat !== i)
      : this.state.checkedCategories.concat(i);
    this.setState({
      checkedCategories: updatedCategories,
    });
  }

  getFilteredRecipeResults() {
    const searchBarFilter = recipe => 
      recipe.name
            .toUpperCase()
            .includes(this.state.searchString.toUpperCase());

    const recipeTagFilter = recipe => 
      this.state.checkedCategories.includes(recipe.category) ||
      this.state.checkedCategories.length === 0;

    return this.state.recipes.filter(searchBarFilter)
                             .filter(recipeTagFilter);
  }

  getFilteredIngredientResults() {
    const searchBarFilter = recipe => 
      recipe.ingredients
            .some(ingredient => ingredient.toUpperCase().includes(this.state.searchString.toUpperCase()));

    const recipeTagFilter = recipe => 
      this.state.checkedCategories.includes(recipe.category) || 
      this.state.checkedCategories.length === 0;

    return this.state.recipes.filter(searchBarFilter)
                             .filter(recipeTagFilter);
  }

  render() {
    return (
      <div>

        <SearchHeader 
          menu_btn_click={() => this.toggleCategoryVisibility()}
          searchString={this.state.searchString}
          updateSearchString={this.updateSearchString}
        />

        <main>
          <div className="grid">
            {
              this.getFilteredRecipeResults().map(recipe => 
                <Link key={recipe.id} to={'/recipeView/' + recipe.id}>
                  <Card title={recipe.name} />
                </Link>
              )
            }
          </div>
          <p style={{textAlign: "center"}}>Recipes with "{this.state.searchString}" as an ingredient</p>
          <div className="grid">
            {
              this.getFilteredIngredientResults().map(recipe => 
                <Link key={recipe.id} to={'/recipeView/' + recipe.id}>
                  <Card title={recipe.name} />
                </Link>
              )
            }
          </div>
        </main>
        
        <Categories
          categories={this.state.categories}
          checkedCategories={this.state.checkedCategories}
          visible={this.state.showCategories}
          backClick={() => this.toggleCategoryVisibility()}
          onChange={(i) => this.handleCategorySelectionChange(i)}
        />
        
      </div>
    );
  }
}

export default Cookbook;
