import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Home1 from './components/Home1';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import BookDetail from './components/BookDetail';
import SelectedBookDetails from './components/SelectedBookDetails';

const App = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleSelectBook = (book) => {
    if (selectedBooks.find((b) => b.id === book.id)) {
      return; // Book already selected
    }

    if (selectedBooks.length >= 5) {
      alert('You can only select up to 5 books.');
      return;
    }

    const countSameCategory = selectedBooks.filter(
      (b) => b.category === book.category
    ).length;

    if (countSameCategory >= 3) {
      alert(`You can only select up to 3 books from the ${book.category} category.`);
      return;
    }

    setSelectedBooks([...selectedBooks, book]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Home selectedBooks={selectedBooks} onSelectBook={handleSelectBook} />}
        />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/books/:id"
          element={<BookDetail onSelectBook={handleSelectBook} />}
        />
        <Route
          path="/selectedbookdetails"
          element={<SelectedBookDetails selectedBooks={selectedBooks} />}
        />
      </Routes>
    </>
  );
};

export default App;
