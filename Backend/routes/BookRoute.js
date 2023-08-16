const router = require('express').Router();
const Bookmodel = require('../models/booksmodel'); 

router.route('/').get((req, res) => {
  Bookmodel.find()
    .then((books) => res.json(books)) 
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  const { title, author, description } = req.body; 

  const newBook = new Bookmodel({
    title,
    author,
    description,
  });

  console.log(newBook);

  newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Bookmodel.findById(req.params.id)
    .then((book) => res.json(book)) 
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete(async (req, res) => {
  console.log('delete logged');
  await Bookmodel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});


module.exports = router;
