// Helper function to create recipe cards
function createRecipeCard(recipe) {
  const difficultyClass = `badge-${recipe.difficulty.toLowerCase()}`;
  
  return `
    <a href="recipe-detail.html?id=${recipe.id}" class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card-image">
      <div class="recipe-card-content">
        <h3 class="recipe-card-title">${recipe.title}</h3>
        <p class="recipe-card-description">${recipe.description}</p>
        <div class="recipe-card-meta">
          <span class="recipe-card-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${recipe.prepTime}
          </span>
          <span class="recipe-card-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            ${recipe.servings}
          </span>
        </div>
        <span class="recipe-card-badge ${difficultyClass}">${recipe.difficulty}</span>
      </div>
    </a>
  `;
}

// Helper function to render recipe grid
function renderRecipeGrid(containerId, recipesToRender) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = recipesToRender.map(recipe => createRecipeCard(recipe)).join('');
  }
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (query) {
      window.location.href = `all-recipes.html?search=${encodeURIComponent(query)}`;
    }
  }
  
  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
}

// Get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Mobile menu toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav ul');
  
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('hidden');
    });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  setupMobileMenu();
});
