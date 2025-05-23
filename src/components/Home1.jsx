// Home.jsx
import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import BookCatalogue from './BookCatalogue';
import { assets } from '../assets/assets'; 

const Home1 = ({ selectedBooks, onSelectBook }) => {
  const [category, setCategory] = useState('Fiction');

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${assets.homeimage})` }}
    >
      <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-lg max-w-md mx-auto">
        <CategorySelector selected={category} onSelect={setCategory} />
      </div>

      <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-6 max-w-6xl mx-auto">
        <BookCatalogue category={category} onSelectBook={onSelectBook} />
      </div>
    </div>
  );
};

export default Home1;
