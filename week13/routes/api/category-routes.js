const router = require('express').Router();
const { Category, Product } = require('../../models');


function handleError500(res){
  return err => {
    // report this -- send an email 
    
    console.log(err)
    console.log('eerrrr');
    res.status(500).json({
      error: 'We encountered an error. Please try again soon.'
    })
  }
}

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      { model: Product }
    ]
  }).then((categories) => {
    res.json(categories);
  })
  .catch(handleError500(res));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [
      {model: Product}
    ]
  }).then(category => res.json(category))
  .catch(handleError500(res))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  }).then(category => {
    res.json(category)
  })
  .catch(handleError500(res));
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{

    const updated = await Category.update({
      category_name: req.body.category_name,
    }, {
      where: {
        id: req.params.id,
      },
    })
    res.json(updated)

  }catch(err){
    console.log(err);
    handleError500(res)(err)
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleted = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    res.json(deleted)
  }catch(err){
    handleError500(res)(err);
  }
});

module.exports = router;
