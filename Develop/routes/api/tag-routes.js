const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



router.get('/', (req, res) => {
  Tag.findAll({
    include:{
      model: Product,
    }
  }) .then (tagData=> res.json(tagData));
});


router.get('/:id', (req, res) => {
  Tag.FinfByPK(
    req.params.id,{
      include:[Product]
    }
    .then(tagData =>  res.status(200).json(tagData))
    .catch(err=>  res.status(400).json(err))
  )
  // find a single tag by its `id`
  // be sure to include its associated Product data
  //solo
});


// create a new tag
router.post('/', (req, res) => {
Tag.create({Tag_name:req.body.Tag_name})
.then(tagData=> res.status(200).json(tagData))
.catch(err=>  res.status(400).json(err))
});



// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body,{where:{id:req.params.id}})
  .then(tagUpdate=> res.status(200).json(tagUpdate))
  .catch(err=> res.status(400).json(err))
});




// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.delete({where:{id:req.params.id}})
  .then(TagDelete=> res.status(200).json(TagDelete))
  .catch(err=> res.status(400).json(err))
});

module.exports = router;
