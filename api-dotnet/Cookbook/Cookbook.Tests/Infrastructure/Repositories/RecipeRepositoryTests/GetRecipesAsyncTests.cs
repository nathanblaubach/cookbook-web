using Cookbook.Domain.Interfaces;
using Cookbook.Infrastructure;
using Cookbook.Infrastructure.Repositories;

namespace Cookbook.Tests.Infrastructure.Repositories.RecipeRepositoryTests;

public class GetRecipesAsyncTests
{
    private readonly IRecipeRepository _recipeRepository = new RecipeRepository(new Database());
    
    [Fact]
    public async Task SuccessfullyLoadsRecipes()
    {
        // Act
        var recipes = await _recipeRepository.GetAllAsync();
        
        // Assert
        Assert.NotNull(recipes);
        Assert.NotEmpty(recipes);
    }
}
