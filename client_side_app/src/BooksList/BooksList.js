import React, {Component} from 'react';
import Select from 'react-select'
import { Redirect } from 'react-router-dom';
import Book from '../Book/Book.js';
import HeaderPanel from '../HeaderPanel/HeaderPanel.js';
import FooterPanel from '../FooterPanel/FooterPanel.js';
import './BooksList.css';

class BooksList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books : [],

      authors: [],

      options: [],

      bookToAdd: {},

      dataAdded: false
    }

    this.fetchBooks = this.fetchBooks.bind(this);
    this.fetchAuthors = this.fetchAuthors.bind(this);
    this.fillOptions = this.fillOptions.bind(this);
  }
  

  // pobieranie listy uzytkownikow z serwera i zapisywanie do state
  fetchBooks() {
    fetch('http://localhost:4000/books/withauthors')
    .then(response => response.json())
    .then(json => {
      const fetchedBooks = json.map(book => {
        return {
          ...book
        }
      });
      this.setState({books: fetchedBooks});      
      console.log(this.state.books);
  });
  }

  // pobieranie listy uzytkownikow z serwera i zapisywanie do state (i wywolanie funkcji do populacji danych w dropboxie)
  fetchAuthors() {
    fetch('http://localhost:4000/authors')
    .then(response => response.json())
    .then(json => {
      const fetchedAuthors = json.map(author => {
        return {
          ...author
        }
      });
      this.setState({authors: fetchedAuthors}, this.fillOptions);      
      console.log(json);
  });
  }

  fillOptions() {
    const newOptions = this.state.authors.map(author => {
      const option = {
        value: author,
        label: author.first_name + " " + author.last_name
      }
      return {
        ...option
      }
    });
    this.setState({options: newOptions});
    //console.log(this.state.options);    
  }

  componentDidMount() {
    this.fetchBooks();
    this.fetchAuthors()
  }

  // dodawanie ksiązki do bazy danych
  addBook = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/books/addbook', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.bookToAdd.title, //niestety jsonplaceholder napisze ta wartosc jako 11
        date: this.state.bookToAdd.date,
        author: this.state.bookToAdd.author.author_id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(this.setState({dataAdded: true}));  
  }


  // wybranie autora z dropdown-menu
  handleSelectOnChange = (selection, { action }) => {
    if (action === 'select-option') {
      var newAuthorToAdd = this.state.bookToAdd;
      newAuthorToAdd.author = selection.value;
      this.setState({bookToAdd: newAuthorToAdd})
      //console.log(this.state.bookToAdd);
    }
  };

  // zmiana w polu tytułu
  handleTitleFieldOnChange = (e) => {
    var newBookToAdd = this.state.bookToAdd;
    newBookToAdd.title = e.target.value;
    this.setState({bookToAdd: newBookToAdd});
    //console.log(this.state.bookToAdd);
  }

  // zmiana w polu daty
  handleDateFieldOnChange = (e) => {
    var newBookToAdd = this.state.bookToAdd;
    newBookToAdd.date = e.target.value;
    this.setState({bookToAdd: newBookToAdd});
  }

  render() {
    // prosta walidacja danych w formularzu
    const bookToAddValidation = this.state.bookToAdd;
    const isEnabled = localStorage.getItem('user') && bookToAddValidation.author && bookToAddValidation.title && bookToAddValidation.date;

    // przekierowanie po pomyslnym dodaniu danych do bazy
    const dataAdded = this.state.dataAdded;
    if (dataAdded) {
      return <Redirect to='/info' />;
    }

    return (
      <div className="App">
        <HeaderPanel />
        <h2>
          Lista książek w sklepie:
        </h2>
        <ul>
          {
            this.state.books.map((book, index) => {
              return(
                <Book
                  key = {book.book_id}
                  title = {book.title}
                  author = {book.author}
                />
              )
            })
          }
        </ul>

        <hr/>

        <form onSubmit={this.addBook}>
          <div id="newBookInfo">
            Dodaj nową książkę:
          </div>
          <div className="newBookData">
            Podaj tytuł:
            <br/>
            <input type="text" name="title" placeholder="Tytuł" className="titleInput" onChange={this.handleTitleFieldOnChange}/>
          </div>
          <div className="newBookData">
            Wybierz datę wydania:
            <br/>
            <input type="date" name="issuedate" placeholder="Data wydania" className="dateInput" onChange={this.handleDateFieldOnChange}/>
          </div>
          <div id="authorInfo">
            Wybierz autora:
            <Select options={this.state.options} onChange={this.handleSelectOnChange} className="dropdownSelect" />
          </div>
          <input type="submit" value="Dodaj" disabled={!isEnabled} />
          <div>
            (Aby dodać nową książkę zaloguj się i wypełnij poprawnie formularz)
          </div>
        </form> 
        <FooterPanel />
      </div>

    );
  }
}

export default BooksList;
