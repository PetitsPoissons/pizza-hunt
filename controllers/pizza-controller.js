const { Pizza } = require('../models');

const pizzaController = {

  // get all pizzas -- GET /api/pizzas
  getAllPizzas(req, res) {
    Pizza.find({})
    .then(dbPizzaData => res.json(dbPizzaData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  // get one pizza by id -- GET /api/pizzas/:id
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
    .then(dbPizzaData => {
      // if no pizza is found, send 404
      if (!dbPizzaData) {
        res.status(404).json({ message: 'No pizza found with this id' });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // create pizza -- POST /api/pizzas
  createPizza({ body }, res) {
    Pizza.create(body)
    .then(dbPizzaData => res.json(dbPizzaData))
    .catch(err => res.status(400).json(err));
  },

  // update pizza by id -- PUT /api/pizzas/:id
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbPizzaData => {
      if (!dbPizzaData) {
        res.status(404).json({ message: 'No pizza found with this id' });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => res.status(400).json(err));
  },

  // delete pizza by id -- DELETE /api/pizzas/:id
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
    .then(dbPizzaData => {
      if (!dbPizzaData) {
        res.status(404).json({ message: 'No pizza found with this id' });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => res.status(400).json(err));
  }
};

module.exports = pizzaController;