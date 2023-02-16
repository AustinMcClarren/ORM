const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// be sure to include its associated Products

// find all categories
router.get('/', (req, res) => {
   Category.findAll({
    include:[Product]
   })
   .then(catData =>  res.status(200).json(catData))
   .catch(err=>  res.status(400).json(err))
});

router.get('/:id', (req, res) => {
  Category.findByPk(
    req.params.id,{
    include:[Product]
   })
   .then(catData =>  res.status(200).json(catData))
   .catch(err=>  res.status(400).json(err))
  
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({category_name:req.body.category_name})
  .then(CategoryData=> res.status(200).json(CategoryData))
  .catch(err=>  res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{where:{id:req.params.id}})
  .then(CategoryUpdate=> res.status(200).json(CategoryUpdate))
  .catch(err=> res.status(400).json(err))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.delete({where:{id:req.params.id}})
  .then(CategoryDelete=> res.status(200).json(CategoryDelete))
  .catch(err=> res.status(400).json(err))
  // delete a category by its `id` value
});

module.exports = router;
