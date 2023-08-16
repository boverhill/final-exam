
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://myuser:mypwd@cluster0.3xdtn2w.mongodb.net/BookList';

mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const bookRouter = require('./routes/BookRoute');

// adding /books to before all routes
app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
