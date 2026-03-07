// Recipe Data
const recipes = [
  {
    id: '1',
    title: 'Creamy Garlic Pasta',
    description: 'A rich and creamy pasta dish with roasted garlic and parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1711539137930-3fa2ae6cec60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwYXN0YSUyMGRpc2glMjBmb29kfGVufDF8fHx8MTc2OTYyMTMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Dinner',
    tags: ['trending', 'viral'],
    ingredients: [
      '1 lb pasta',
      '1 cup heavy cream',
      '6 cloves garlic, minced',
      '1 cup parmesan cheese',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'In a large pan, sauté garlic until fragrant',
      'Add cream and bring to a simmer',
      'Add cooked pasta and parmesan',
      'Toss until well coated',
      'Garnish with parsley and serve'
    ]
  },
  {
    id: '2',
    title: 'Mediterranean Quinoa Bowl',
    description: 'Fresh and healthy bowl packed with vegetables and protein.',
    image: 'https://images.unsplash.com/photo-1605034298551-baacf17591d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bCUyMGhlYWx0aHl8ZW58MXx8fHwxNzY5NjAxODgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '15 min',
    cookTime: '15 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Lunch',
    tags: ['quick', 'healthy', 'featured'],
    ingredients: [
      '1 cup quinoa',
      'Cherry tomatoes',
      'Cucumber',
      'Feta cheese',
      'Olives',
      'Lemon vinaigrette'
    ],
    instructions: [
      'Cook quinoa according to package',
      'Chop vegetables',
      'Combine all ingredients in a bowl',
      'Drizzle with vinaigrette',
      'Toss and serve'
    ]
  },
  {
    id: '3',
    title: 'Herb Grilled Chicken',
    description: 'Juicy chicken breasts marinated in herbs and grilled to perfection.',
    image: 'https://images.unsplash.com/photo-1496074620649-6b1b02e5c1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGRpbm5lcnxlbnwxfHx8fDE3Njk1OTU2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    tags: ['popular', 'protein'],
    ingredients: [
      '4 chicken breasts',
      'Olive oil',
      'Fresh rosemary',
      'Thyme',
      'Garlic powder',
      'Salt and pepper'
    ],
    instructions: [
      'Mix herbs and oil for marinade',
      'Coat chicken and refrigerate 30 min',
      'Preheat grill to medium-high',
      'Grill chicken 6-7 min per side',
      'Rest for 5 minutes before serving'
    ]
  },
  {
    id: '4',
    title: 'Decadent Chocolate Cake',
    description: 'Rich, moist chocolate cake with smooth chocolate ganache.',
    image: 'https://images.unsplash.com/photo-1736840334919-aac2d5af73e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3Njk2MTczOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '30 min',
    cookTime: '35 min',
    servings: 8,
    difficulty: 'Medium',
    category: 'Dessert',
    tags: ['featured', 'sweet'],
    ingredients: [
      '2 cups flour',
      '2 cups sugar',
      '3/4 cup cocoa powder',
      '2 eggs',
      '1 cup milk',
      'Dark chocolate for ganache'
    ],
    instructions: [
      'Preheat oven to 350°F',
      'Mix dry ingredients',
      'Add wet ingredients and combine',
      'Pour into greased pans',
      'Bake for 35 minutes',
      'Cool and frost with ganache'
    ]
  },
  {
    id: '5',
    title: 'Fluffy Buttermilk Pancakes',
    description: 'Classic breakfast pancakes that are light and fluffy.',
    image: 'https://images.unsplash.com/photo-1637533114107-1dc725c6e576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwYW5jYWtlc3xlbnwxfHx8fDE3Njk2MzIwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    tags: ['quick', 'beginner', 'popular'],
    ingredients: [
      '2 cups flour',
      '2 tbsp sugar',
      '2 tsp baking powder',
      '1 egg',
      '1 1/2 cups buttermilk',
      'Butter for cooking'
    ],
    instructions: [
      'Mix dry ingredients',
      'Whisk together wet ingredients',
      'Combine wet and dry until just mixed',
      'Heat griddle to medium',
      'Pour 1/4 cup batter per pancake',
      'Flip when bubbles form'
    ]
  },
  {
    id: '6',
    title: 'Street-Style Tacos',
    description: 'Authentic Mexican tacos with seasoned meat and fresh toppings.',
    image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc2OTY3OTYzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '15 min',
    cookTime: '20 min',
    servings: 6,
    difficulty: 'Easy',
    category: 'Dinner',
    tags: ['trending', 'viral', 'quick'],
    ingredients: [
      '1 lb ground beef',
      'Taco seasoning',
      'Corn tortillas',
      'Cilantro',
      'Onions',
      'Lime wedges'
    ],
    instructions: [
      'Cook ground beef with seasoning',
      'Warm tortillas',
      'Fill tortillas with meat',
      'Top with cilantro and onions',
      'Serve with lime wedges'
    ]
  },
  {
    id: '7',
    title: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.',
    image: 'https://images.unsplash.com/photo-1749169395459-9eb9835bd718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc2OTU4MjM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    tags: ['featured', 'popular'],
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Fresh mozzarella',
      'Fresh basil',
      'Olive oil',
      'Salt'
    ],
    instructions: [
      'Preheat oven to 475°F',
      'Roll out pizza dough',
      'Spread tomato sauce',
      'Add mozzarella slices',
      'Bake 12-15 minutes',
      'Top with fresh basil'
    ]
  },
  {
    id: '8',
    title: 'Classic Burger & Fries',
    description: 'Juicy beef burger with crispy homemade fries.',
    image: 'https://images.unsplash.com/photo-1688912739425-67191f6823f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllcyUyMGZhc3QlMjBmb29kfGVufDF8fHx8MTc2OTU5Mzg3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Dinner',
    tags: ['popular', 'comfort'],
    ingredients: [
      '1 lb ground beef',
      'Burger buns',
      'Lettuce, tomato, onion',
      'Cheese slices',
      'Potatoes for fries',
      'Condiments'
    ],
    instructions: [
      'Form beef into patties',
      'Season with salt and pepper',
      'Cut potatoes for fries',
      'Fry or bake fries until crispy',
      'Grill burgers 4 min per side',
      'Assemble with toppings'
    ]
  },
  {
    id: '9',
    title: 'Sushi Roll Platter',
    description: 'Fresh salmon and avocado sushi rolls with wasabi and soy sauce.',
    image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3Njk1NzU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Hard',
    category: 'Dinner',
    tags: ['featured', 'healthy'],
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Fresh salmon',
      'Avocado',
      'Cucumber',
      'Wasabi and soy sauce'
    ],
    instructions: [
      'Cook and season sushi rice',
      'Place nori on bamboo mat',
      'Spread rice on nori',
      'Add salmon, avocado, cucumber',
      'Roll tightly',
      'Slice and serve with condiments'
    ]
  },
  {
    id: '10',
    title: 'Hearty Vegetable Soup',
    description: 'Warming soup loaded with seasonal vegetables and herbs.',
    image: 'https://images.unsplash.com/photo-1633364468491-b0df288c7da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VwJTIwYm93bCUyMGhvdHxlbnwxfHx8fDE3Njk2ODI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 6,
    difficulty: 'Easy',
    category: 'Lunch',
    tags: ['quick', 'one-pot', 'healthy'],
    ingredients: [
      'Vegetable broth',
      'Carrots',
      'Celery',
      'Potatoes',
      'Green beans',
      'Herbs and spices'
    ],
    instructions: [
      'Sauté onions and garlic',
      'Add chopped vegetables',
      'Pour in broth',
      'Season with herbs',
      'Simmer 25-30 minutes',
      'Serve hot with bread'
    ]
  },
  {
    id: '11',
    title: 'Acai Smoothie Bowl',
    description: 'Refreshing acai bowl topped with fresh fruits and granola.',
    image: 'https://images.unsplash.com/photo-1588068403046-169c80c69938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBmcnVpdHxlbnwxfHx8fDE3Njk1ODE3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    tags: ['quick', 'healthy', 'beginner'],
    ingredients: [
      'Acai packets',
      'Banana',
      'Berries',
      'Granola',
      'Honey',
      'Coconut flakes'
    ],
    instructions: [
      'Blend acai with banana',
      'Pour into bowls',
      'Top with berries and granola',
      'Drizzle with honey',
      'Add coconut flakes',
      'Serve immediately'
    ]
  },
  {
    id: '12',
    title: 'Perfect Ribeye Steak',
    description: 'Restaurant-quality steak cooked to perfection with garlic butter.',
    image: 'https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGdyaWxsZWQlMjBtZWF0fGVufDF8fHx8MTc2OTYwMjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 2,
    difficulty: 'Medium',
    category: 'Dinner',
    tags: ['featured', 'chef-recommended'],
    ingredients: [
      '2 ribeye steaks',
      'Salt and pepper',
      'Butter',
      'Garlic cloves',
      'Fresh thyme',
      'Olive oil'
    ],
    instructions: [
      'Bring steaks to room temperature',
      'Season generously with salt and pepper',
      'Heat pan until smoking',
      'Sear steaks 3-4 min per side',
      'Add butter, garlic, and thyme',
      'Baste and rest before serving'
    ]
  }
];

// Utility functions
function getRecipesByTag(tag) {
  return recipes.filter(recipe => recipe.tags.includes(tag));
}

function getRecipeById(id) {
  return recipes.find(recipe => recipe.id === id);
}

function getRecipesByCategory(category) {
  return recipes.filter(recipe => recipe.category === category);
}

function getAllCategories() {
  const categories = {};
  recipes.forEach(recipe => {
    if (!categories[recipe.category]) {
      categories[recipe.category] = 0;
    }
    categories[recipe.category]++;
  });
  return categories;
}
