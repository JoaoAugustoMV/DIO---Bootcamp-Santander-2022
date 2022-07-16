const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3200, () => {
  console.log('Server Started!');
});

app.route('/api/books').get((request, response) => {
  response.send(BOOKS);
});

app.route('/api/books').post((request, response) => {
  let book = request.body;

  const firstId = BOOKS ? Math.max.apply(null, BOOKS.map(bookIterator => bookIterator.id)) + 1 : 1;
  book.id = firstId;
  BOOKS.push(book);
  

  response.status(201).send(book);
});

// app.route('/api/book/:id').put((request, response) => {
//   const courseId = +request.params['id'];
//   const course = request.body;

//   const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
//   COURSES[index] = course;

//   response.status(200).send(course);
// });

// app.route('/api/courses/:id').get((request, response) => {
//   const courseId = +request.params['id'];

//   response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
// });

// app.route('/api/courses/:id').delete((request, response)=> {
//   const courseId = +request.params['id'];
//   COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
//   response.status(204).send({});
// });

var BOOKS = [
  { 
    Id: "1",
    Name: "Book1", 
    Price: 24, 
    Quantity: 1, 
    Category: "action", 
    Img: "img1" 
  },
  {
     Id: "2",
    Name: "Book2", 
    Price: 50, 
    Quantity: 1, 
    Category: "action", 
    Img: "img2" 
  },
  {
     Id: "3",
    Name: "Book3", 
    Price: 20, 
    Quantity: 2, 
    Category: "action", 
    Img: "img3" 
  },
  {
     Id: "4",
    Name: "Book4", 
    Price: 10, 
    Quantity: 1, 
    Category: "action", 
    Img: "img1" 
  },
  {
     Id: "5",
    Name: "Book5", 
    Price: 15, 
    Quantity: 5, 
    Category: "action", 
    Img: "img1" 
  }
];

