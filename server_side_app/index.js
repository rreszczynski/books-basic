const express = require('express');
const db = require('./config/database');
const cors = require('cors')



const app = express();

app.use(cors());
app.use(express.json());

// testowanie połączenia z bazą danych
db.authenticate()
.then(() => {
	console.log('Connection with DB has been established successfully.');
})
.catch(err => {
	console.error('Unable to connect to the database:', err);
});

app.get('/', (req, res) => {
	res.send('hello from the backend server');
})

app.use('/authors', require('./routes/authors'));
app.use('/books', require('./routes/books'));


app.listen(4000, () => {
	console.log('Backend server listening on port 4000')	
});