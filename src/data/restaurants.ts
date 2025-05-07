
export interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  reviews: number;
  description: string;
  address: string;
  neighborhood: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
  features: string[];
  menu: {
    category: string;
    items: {
      name: string;
      description: string;
      price: number;
      popular?: boolean;
    }[];
  }[];
  featured?: boolean;
}

export interface Category {
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { name: "Italian", icon: "🍝" },
  { name: "Japanese", icon: "🍣" },
  { name: "Mexican", icon: "🌮" },
  { name: "Indian", icon: "🍛" },
  { name: "Thai", icon: "🥢" },
  { name: "Vegetarian", icon: "🥗" },
  { name: "Seafood", icon: "🦞" },
  { name: "Steakhouse", icon: "🥩" }
];

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    cuisine: "Italian",
    priceRange: "$$",
    rating: 4.7,
    reviews: 342,
    description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas in a cozy, rustic setting. Our chefs bring generations of Italian cooking traditions to every dish.",
    address: "123 Main St, Cityville",
    neighborhood: "Downtown",
    openingHours: [
      { days: "Monday - Friday", hours: "11:00 AM - 10:00 PM" },
      { days: "Saturday - Sunday", hours: "10:00 AM - 11:00 PM" }
    ],
    features: ["Outdoor Seating", "Full Bar", "Vegetarian Options", "Gluten-Free Options"],
    menu: [
      {
        category: "Antipasti",
        items: [
          {
            name: "Bruschetta",
            description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
            price: 9.99,
            popular: true
          },
          {
            name: "Caprese Salad",
            description: "Fresh mozzarella, tomatoes, and sweet basil with a balsamic reduction",
            price: 11.99
          }
        ]
      },
      {
        category: "Pasta",
        items: [
          {
            name: "Spaghetti Carbonara",
            description: "Classic carbonara with pancetta, egg, black pepper, and cheese",
            price: 16.99,
            popular: true
          },
          {
            name: "Fettuccine Alfredo",
            description: "Fettuccine pasta in a rich and creamy Alfredo sauce",
            price: 15.99
          }
        ]
      },
      {
        category: "Pizzas",
        items: [
          {
            name: "Margherita",
            description: "San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil",
            price: 14.99,
            popular: true
          },
          {
            name: "Quattro Formaggi",
            description: "Four cheese pizza with mozzarella, gorgonzola, fontina, and parmesan",
            price: 16.99
          }
        ]
      }
    ],
    featured: true
  },
  {
    id: 2,
    name: "Sakura Japanese",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    cuisine: "Japanese",
    priceRange: "$$$",
    rating: 4.9,
    reviews: 520,
    description: "Premium Japanese cuisine offering the freshest sushi, sashimi, and traditional dishes. Our master chefs prepare each dish with precision and artistry for an authentic experience.",
    address: "456 Cherry Blossom Ave, Cityville",
    neighborhood: "East Side",
    openingHours: [
      { days: "Monday - Thursday", hours: "12:00 PM - 10:00 PM" },
      { days: "Friday - Saturday", hours: "12:00 PM - 11:00 PM" },
      { days: "Sunday", hours: "4:00 PM - 9:00 PM" }
    ],
    features: ["Sushi Bar", "Private Dining", "Sake Selection", "Vegetarian Options"],
    menu: [
      {
        category: "Starters",
        items: [
          {
            name: "Edamame",
            description: "Steamed soybeans sprinkled with sea salt",
            price: 6.99
          },
          {
            name: "Gyoza",
            description: "Pan-fried pork dumplings served with dipping sauce",
            price: 8.99,
            popular: true
          }
        ]
      },
      {
        category: "Sushi Rolls",
        items: [
          {
            name: "Dragon Roll",
            description: "Eel, crab, cucumber inside, avocado outside",
            price: 18.99,
            popular: true
          },
          {
            name: "Rainbow Roll",
            description: "California roll topped with assorted sashimi",
            price: 19.99
          }
        ]
      },
      {
        category: "Main Dishes",
        items: [
          {
            name: "Teriyaki Salmon",
            description: "Grilled salmon with teriyaki sauce, served with rice and vegetables",
            price: 24.99
          },
          {
            name: "Tonkotsu Ramen",
            description: "Rich pork bone broth with chashu, soft-boiled egg, and vegetables",
            price: 17.99,
            popular: true
          }
        ]
      }
    ],
    featured: true
  },
  {
    id: 3,
    name: "El Toro Loco",
    image: "https://images.unsplash.com/photo-1615887627923-41f31c3a8811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    cuisine: "Mexican",
    priceRange: "$$",
    rating: 4.5,
    reviews: 278,
    description: "Vibrant Mexican restaurant serving authentic dishes made with traditional recipes and fresh ingredients. Experience the flavors of Mexico with our handcrafted margaritas and sizzling fajitas.",
    address: "789 Fiesta Blvd, Cityville",
    neighborhood: "West End",
    openingHours: [
      { days: "Tuesday - Thursday", hours: "11:00 AM - 9:30 PM" },
      { days: "Friday - Saturday", hours: "11:00 AM - 10:30 PM" },
      { days: "Sunday", hours: "12:00 PM - 8:00 PM" },
      { days: "Monday", hours: "Closed" }
    ],
    features: ["Outdoor Patio", "Tequila Bar", "Live Music (Weekends)", "Family-Friendly"],
    menu: [
      {
        category: "Appetizers",
        items: [
          {
            name: "Guacamole & Chips",
            description: "Freshly made guacamole with homemade tortilla chips",
            price: 10.99,
            popular: true
          },
          {
            name: "Queso Fundido",
            description: "Melted cheese with chorizo and flour tortillas",
            price: 11.99
          }
        ]
      },
      {
        category: "Tacos",
        items: [
          {
            name: "Street Tacos",
            description: "Three authentic street tacos with your choice of meat, onions, cilantro, and salsa",
            price: 13.99
          },
          {
            name: "Fish Tacos",
            description: "Battered fish, cabbage slaw, and chipotle crema in corn tortillas",
            price: 15.99,
            popular: true
          }
        ]
      },
      {
        category: "Specialties",
        items: [
          {
            name: "Sizzling Fajitas",
            description: "Your choice of protein with bell peppers and onions, served with tortillas",
            price: 19.99,
            popular: true
          },
          {
            name: "Enchiladas Suizas",
            description: "Chicken enchiladas topped with tomatillo sauce and cheese",
            price: 16.99
          }
        ]
      }
    ],
    featured: true
  },
  {
    id: 4,
    name: "Taste of India",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    cuisine: "Indian",
    priceRange: "$$",
    rating: 4.6,
    reviews: 310,
    description: "Authentic Indian cuisine with rich flavors and aromatic spices. Our tandoor oven produces freshly baked naan and succulent meats for a true taste of India.",
    address: "321 Spice Lane, Cityville",
    neighborhood: "Midtown",
    openingHours: [
      { days: "Monday - Thursday", hours: "11:30 AM - 10:00 PM" },
      { days: "Friday - Sunday", hours: "11:30 AM - 11:00 PM" }
    ],
    features: ["Lunch Buffet", "Vegan Options", "Private Events", "Catering"],
    menu: [
      {
        category: "Appetizers",
        items: [
          {
            name: "Vegetable Samosas",
            description: "Crispy pastries filled with spiced potatoes and peas",
            price: 7.99,
            popular: true
          },
          {
            name: "Chicken Pakora",
            description: "Chicken fritters with chickpea batter and spices",
            price: 9.99
          }
        ]
      },
      {
        category: "Curries",
        items: [
          {
            name: "Butter Chicken",
            description: "Tandoori chicken in a rich, creamy tomato sauce",
            price: 17.99,
            popular: true
          },
          {
            name: "Lamb Vindaloo",
            description: "Spicy lamb curry with potatoes in a tangy sauce",
            price: 19.99
          }
        ]
      },
      {
        category: "Vegetarian",
        items: [
          {
            name: "Palak Paneer",
            description: "Cottage cheese cubes in a spinach gravy",
            price: 15.99
          },
          {
            name: "Chana Masala",
            description: "Chickpeas cooked with onions, tomatoes, and spices",
            price: 14.99,
            popular: true
          }
        ]
      }
    ],
    featured: false
  },
  {
    id: 5,
    name: "Thai Orchid",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    cuisine: "Thai",
    priceRange: "$$",
    rating: 4.4,
    reviews: 205,
    description: "Experience the vibrant flavors of Thailand in a peaceful setting. From spicy curries to delicate noodle dishes, our menu balances the sweet, sour, salty, and spicy elements of Thai cuisine.",
    address: "555 Bamboo St, Cityville",
    neighborhood: "North End",
    openingHours: [
      { days: "Monday - Friday", hours: "11:30 AM - 9:30 PM" },
      { days: "Saturday", hours: "12:00 PM - 10:00 PM" },
      { days: "Sunday", hours: "12:00 PM - 9:00 PM" }
    ],
    features: ["Delivery", "Spice Level Options", "Gluten-Free Options", "Beer & Wine"],
    menu: [
      {
        category: "Starters",
        items: [
          {
            name: "Spring Rolls",
            description: "Crispy rolls filled with vegetables, served with sweet chili sauce",
            price: 8.99
          },
          {
            name: "Satay Chicken",
            description: "Grilled marinated chicken skewers with peanut sauce",
            price: 10.99,
            popular: true
          }
        ]
      },
      {
        category: "Noodles & Rice",
        items: [
          {
            name: "Pad Thai",
            description: "Stir-fried rice noodles with egg, tofu, bean sprouts, and peanuts",
            price: 15.99,
            popular: true
          },
          {
            name: "Pineapple Fried Rice",
            description: "Fried rice with pineapple, cashews, and your choice of protein",
            price: 16.99
          }
        ]
      },
      {
        category: "Curries",
        items: [
          {
            name: "Green Curry",
            description: "Spicy curry with bamboo shoots, bell peppers, and basil",
            price: 17.99,
            popular: true
          },
          {
            name: "Massaman Curry",
            description: "Mild curry with potatoes, onions, and peanuts",
            price: 18.99
          }
        ]
      }
    ],
    featured: false
  },
  {
    id: 6,
    name: "Green Garden",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    cuisine: "Vegetarian",
    priceRange: "$$",
    rating: 4.8,
    reviews: 189,
    description: "Creative vegetarian and vegan cuisine that celebrates fresh, seasonal produce. Our innovative dishes prove that plant-based eating can be both satisfying and delicious.",
    address: "42 Greenleaf Ave, Cityville",
    neighborhood: "Arts District",
    openingHours: [
      { days: "Tuesday - Friday", hours: "11:00 AM - 9:00 PM" },
      { days: "Saturday - Sunday", hours: "10:00 AM - 9:30 PM" },
      { days: "Monday", hours: "Closed" }
    ],
    features: ["All Vegetarian", "Vegan Options", "Organic Ingredients", "Weekend Brunch"],
    menu: [
      {
        category: "Starters",
        items: [
          {
            name: "Avocado Toast",
            description: "Multigrain toast topped with avocado, microgreens, and cherry tomatoes",
            price: 11.99,
            popular: true
          },
          {
            name: "Buffalo Cauliflower",
            description: "Crispy cauliflower tossed in buffalo sauce with blue cheese dip",
            price: 10.99
          }
        ]
      },
      {
        category: "Mains",
        items: [
          {
            name: "Buddha Bowl",
            description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
            price: 16.99,
            popular: true
          },
          {
            name: "Mushroom Risotto",
            description: "Creamy Arborio rice with wild mushrooms and truffle oil",
            price: 18.99
          }
        ]
      },
      {
        category: "Desserts",
        items: [
          {
            name: "Vegan Chocolate Cake",
            description: "Rich chocolate cake with raspberry coulis",
            price: 8.99,
            popular: true
          },
          {
            name: "Apple Crumble",
            description: "Warm apple crumble with vanilla ice cream",
            price: 9.99
          }
        ]
      }
    ],
    featured: true
  }
];

export const getRestaurantById = (id: number): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id);
};

export const getFilteredRestaurants = (
  searchQuery: string = "",
  cuisine: string = "",
  priceRange: string = ""
): Restaurant[] => {
  return restaurants.filter(restaurant => {
    const matchesSearch = searchQuery === "" || 
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCuisine = cuisine === "" || restaurant.cuisine === cuisine;
    
    const matchesPriceRange = priceRange === "" || restaurant.priceRange === priceRange;
    
    return matchesSearch && matchesCuisine && matchesPriceRange;
  });
};

export const getFeaturedRestaurants = (): Restaurant[] => {
  return restaurants.filter(restaurant => restaurant.featured);
};
