# books-basic
### Bookstore - WebApp project 
##### Project made as an excersise for Internet Technologies course.

This project realizes simple  functionalities of Book Store. Program allows to view available books and add new books to offer.

Project consists of three modules:
- MySQL database
- server-side applicatoin
- client-side application

#### Used technologies

- Express
- React
- JavaScript
- Sequelize ORM
- MySQL
- Basic HTML and CSS

#### Project description

Server-side app utilises Sequelize ORM to get data from database and to add new data to it. Data is validated by application of appropriate Sequelize models. Main task of server-side application is to process GET and POST requests for client-side app and exchange data with DB.

Client-side app realizes functionalities of displaying list of books stored in database and adding new books to DB.
Main page has dummy user login/logout functionality (username is store in localStorage). Only logged user has the possibility to add new books to DB.

To add new book following conditions must be true:
- title field cannot be empty,
- issue date has to be chosen,
- author has to be chosen from the list (stored in DB),
- user has to be logged in.

Only after meeting these condition user can add new book to DB.

After the book is added user will be redirected to subpage with confirm message.

##### Author: Rafał Reszczyński
