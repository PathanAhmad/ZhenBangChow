// src/dishesData.js

const categories = [
    { key: 1, name: 'Main Course' },
    { key: 2, name: 'Sides' },
    { key: 3, name: 'Appetizers' },
    { key: 4, name: 'Desserts' },
    { key: 5, name: 'Noodles' },
    { key: 6, name: 'Rice Dishes' },
];

// Dishes
const dishes = [
    // Main Course (key: 1)
    { id: 1, key: 1, name: 'Kung Pao Chicken', price: 12.99, description: 'Spicy stir-fried chicken with peanuts and vegetables.', image: '/images/kung_pao_chicken.jpg' },
    { id: 2, key: 1, name: 'Mapo Tofu', price: 11.49, description: 'Spicy tofu dish with ground meat and chili bean paste.', image: '/images/mapo_tofu.jpg' },
    { id: 3, key: 1, name: 'Sweet and Sour Pork', price: 13.99, description: 'Pork with a sweet and tangy sauce and vegetables.', image: '/images/sweet_sour_pork.jpg' },
    { id: 4, key: 1, name: 'Beef Chow Mein', price: 12.99, description: 'Stir-fried noodles with beef and vegetables.', image: '/images/beef_chow_mein.jpg' },
    { id: 5, key: 1, name: 'Peking Duck', price: 25.99, description: 'Crispy roasted duck served with pancakes and sauce.', image: '/images/peking_duck.jpg' },
    { id: 6, key: 1, name: 'Orange Chicken', price: 14.49, description: 'Fried chicken in a sweet orange sauce.', image: '/images/orange_chicken.jpg' },
    { id: 7, key: 1, name: 'Szechuan Shrimp', price: 15.99, description: 'Shrimp cooked in a spicy Szechuan sauce.', image: '/images/szechuan_shrimp.jpg' },
    { id: 8, key: 1, name: 'Moo Shu Pork', price: 13.49, description: 'Stir-fried pork with vegetables and pancakes.', image: '/images/moo_shu_pork.jpg' },
    { id: 9, key: 1, name: 'Chow Fun', price: 11.99, description: 'Stir-fried wide rice noodles with meat and vegetables.', image: '/images/chow_fun.jpg' },
    { id: 10, key: 1, name: 'Teriyaki Chicken', price: 12.99, description: 'Grilled chicken glazed with teriyaki sauce.', image: '/images/teriyaki_chicken.jpg' },
  
    // Appetizers (key: 3)
    { id: 11, key: 3, name: 'Spring Rolls', price: 6.99, description: 'Crispy rolls filled with vegetables and served with sweet sauce.', image: '/images/spring_rolls.jpg' },
    { id: 12, key: 3, name: 'Dumplings', price: 8.99, description: 'Steamed or fried dumplings filled with meat or vegetables.', image: '/images/dumplings.jpg' },
    { id: 13, key: 3, name: 'Crab Rangoon', price: 7.49, description: 'Fried dumplings filled with cream cheese and crab meat.', image: '/images/crab_rangoon.jpg' },
    { id: 14, key: 3, name: 'Sesame Balls', price: 5.99, description: 'Deep-fried rice balls coated with sesame seeds.', image: '/images/sesame_balls.jpg' },
    { id: 15, key: 3, name: 'Scallion Pancakes', price: 6.49, description: 'Flaky pancakes with green onions.', image: '/images/scallion_pancakes.jpg' },
    { id: 16, key: 3, name: 'Hot and Sour Soup', price: 4.99, description: 'Spicy soup with mushrooms and tofu.', image: '/images/hot_and_sour_soup.jpg' },
    { id: 17, key: 3, name: 'Wontons', price: 6.99, description: 'Dumplings filled with pork served in broth.', image: '/images/wontons.jpg' },
    { id: 18, key: 3, name: 'Edamame', price: 5.49, description: 'Steamed young soybeans sprinkled with salt.', image: '/images/edamame.jpg' },
    { id: 19, key: 3, name: 'Chili Oil Noodles', price: 7.99, description: 'Noodles tossed in spicy chili oil.', image: '/images/chili_oil_noodles.jpg' },
    { id: 20, key: 3, name: 'Fish Balls', price: 6.49, description: 'Fried fish balls served with dipping sauce.', image: '/images/fish_balls.jpg' },
  
    // Sides (key: 2)
    { id: 21, key: 2, name: 'Steamed Jasmine Rice', price: 2.99, description: 'Fluffy jasmine rice steamed to perfection.', image: '/images/steamed_jasmine_rice.jpg' },
    { id: 22, key: 2, name: 'Fried Rice', price: 5.99, description: 'Stir-fried rice with vegetables and eggs.', image: '/images/fried_rice.jpg' },
    { id: 23, key: 2, name: 'Stir-Fried Bok Choy', price: 4.49, description: 'Quickly sautéed bok choy with garlic.', image: '/images/stir_fried_bok_choy.jpg' },
    { id: 24, key: 2, name: 'Chili Garlic Green Beans', price: 4.99, description: 'Green beans sautéed in chili garlic sauce.', image: '/images/chili_garlic_green_beans.jpg' },
    { id: 25, key: 2, name: 'Szechuan Pickled Vegetables', price: 3.99, description: 'Spicy pickled vegetables served cold.', image: '/images/szechuan_pickled_vegetables.jpg' },
    { id: 26, key: 2, name: 'Vegetable Lo Mein', price: 5.49, description: 'Soft noodles stir-fried with vegetables.', image: '/images/vegetable_lo_mein.jpg' },
    { id: 27, key: 2, name: 'Egg Drop Soup', price: 3.49, description: 'Light soup with beaten eggs and green onions.', image: '/images/egg_drop_soup.jpg' },
    { id: 28, key: 2, name: 'Hot Chili Oil', price: 1.99, description: 'Spicy chili oil for dipping.', image: '/images/hot_chili_oil.jpg' },
    { id: 29, key: 2, name: 'Crispy Seaweed', price: 2.99, description: 'Deep-fried seaweed snacks.', image: '/images/crispy_seaweed.jpg' },
    { id: 30, key: 2, name: 'Peanut Noodles', price: 6.99, description: 'Noodles tossed in a creamy peanut sauce.', image: '/images/peanut_noodles.jpg' },

    // Desserts (key: 4)
    { id: 31, key: 4, name: 'Mango Pudding', price: 4.99, description: 'Creamy mango dessert with a hint of coconut.', image: '/images/mango_pudding.jpg' },
    { id: 32, key: 4, name: 'Sesame Balls', price: 5.49, description: 'Sweet glutinous rice balls filled with red bean paste.', image: '/images/sesame_balls_dessert.jpg' },
    { id: 33, key: 4, name: 'Egg Tarts', price: 3.99, description: 'Flaky pastry filled with creamy egg custard.', image: '/images/egg_tarts.jpg' },
    { id: 34, key: 4, name: 'Almond Jelly', price: 3.49, description: 'Chilled almond-flavored jelly served with fruit.', image: '/images/almond_jelly.jpg' },
    { id: 35, key: 4, name: 'Red Bean Ice Cream', price: 4.99, description: 'Unique ice cream made with sweet red beans.', image: '/images/red_bean_ice_cream.jpg' },
    { id: 36, key: 4, name: 'Coconut Tapioca', price: 5.49, description: 'Sweet tapioca pudding with coconut milk.', image: '/images/coconut_tapioca.jpg' },
    { id: 37, key: 4, name: 'Lychee Jelly', price: 4.29, description: 'Chilled jelly with lychee flavor.', image: '/images/lychee_jelly.jpg' },
    { id: 38, key: 4, name: 'Matcha Mochi', price: 5.99, description: 'Chewy matcha-flavored rice cake.', image: '/images/matcha_mochi.jpg' },
    { id: 39, key: 4, name: 'Green Tea Ice Cream', price: 4.49, description: 'Ice cream flavored with green tea.', image: '/images/green_tea_ice_cream.jpg' },
    { id: 40, key: 4, name: 'Fortune Cookies', price: 1.49, description: 'Crispy cookies with fortunes inside.', image: '/images/fortune_cookies.jpg' },

    // Noodles (key: 5)
    { id: 41, key: 5, name: 'Dan Dan Noodles', price: 9.99, description: 'Noodles topped with spicy meat sauce.', image: '/images/dan_dan_noodles.jpg' },
    { id: 42, key: 5, name: 'Cold Sesame Noodles', price: 8.99, description: 'Chilled noodles with sesame sauce and cucumbers.', image: '/images/cold_sesame_noodles.jpg' },

    // Rice Dishes (key: 6)
    { id: 46, key: 6, name: 'Yangzhou Fried Rice', price: 7.99, description: 'Fried rice with shrimp, ham, and vegetables.', image: '/images/yangzhou_fried_rice.jpg' },
    { id: 47, key: 6, name: 'Chicken Fried Rice', price: 6.99, description: 'Fried rice stir-fried with chicken and peas.', image: '/images/chicken_fried_rice.jpg' },
];

export { categories, dishes };
