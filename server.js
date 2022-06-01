const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;

const drinks = require('./models/drinks');
const foods = require('./models/food');


app.get('/', (req, res) => {
  res.send(`Welcome to the Gitpub App`);
});

app.get('/drinks', (req, res) => {
  res.render('index', { drinks, foods });
});

app.get('/drinks/:id', (req, res) => {
  let id = req.params.id;
  const updatedDrinks = drinks.map((drink) => {
    const result = drink.name.replace(
      drink.name[0],
      drink.name.charAt(0).toUpperCase()
    );
    drink.image = `${drink.image}.png`;
    drink.name = result;
    return drink;
  });
  res.render('show', { drink: updatedDrinks[id] });
});

app.get('/foods/:id', (req, res) => {
    let id = req.params.id;
    const updatedFoods = foods.map((food) => {
      const result = food.name.replace(
        food.name[0],
        food.name.charAt(0).toUpperCase()
      );
      food.image = `${food.image}.png`;
      food.name = result;
      return food;
    });
    res.render('food', { food: updatedFoods[id] });
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
