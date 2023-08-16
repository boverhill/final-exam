const mongoose = require('mongoose');
const Bookmodel = require('./models/booksmodel'); 

const uri = 'mongodb+srv://myuser:mypwd@cluster0.3xdtn2w.mongodb.net/BookList'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', async () => {
  console.log('Connected to MongoDB');

  const seedData = [
    {
      title: 'Book 1',
      author: 'Author 1',
      description: 'Description for Book 1',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      description: 'Description for Book 2',
    },
  ];

  try {
    for (const bookData of seedData) {
      const newBook = new Bookmodel(bookData);
      await newBook.save();
      console.log(`Added book: ${newBook.title}`);
    }
    console.log('Seeding complete');
  } catch (error) {
    console.error('Error seeding data:', error);
  }

  mongoose.connection.close();
});
