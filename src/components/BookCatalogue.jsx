import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookCatalogue = ({ category }) => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({ author: '', title: '' });
  const [language, setLanguage] = useState('en');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(1); 
  }, [category, language]);

  useEffect(() => {
    fetch(`https://gutendex.com/books/?topic=${category.toLowerCase()}&page=${page}&languages=${language}`)
      .then((res) => res.json())
      .then((data) => {
        const booksWithCategory = data.results.map((book) => ({
          ...book,
          category: category,
        }));
        setBooks(booksWithCategory);
      });
  }, [category, page, language]);

  const handleCardClick = (book) => {
    navigate(`/books/${book.id}`, { state: { book } });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value.toLowerCase() });
  };

  const filteredBooks = books.filter((book) => {
    const authorNames = book.authors?.map((a) => a.name.toLowerCase()).join(', ') || '';
    const titleMatch = book.title?.toLowerCase().includes(filters.title);
    const authorMatch = authorNames.includes(filters.author);
    return titleMatch && authorMatch;
  });

  return (
    <div>
      {/* Language Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Select Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:ring-orange-700 focus:outline-none"
        >
          <option value="en">English</option>
          <option value="da">Danish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
          <option value="no">Norwegian</option>
          <option value="nl">Dutch</option>
          <option value="it">Italian</option>
          <option value="sv">Swedish</option>
          <option value="ja">Japanese</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      {/* Filter Inputs */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Filter by Title"
          value={filters.title}
          onChange={handleFilterChange}
          className="p-2 rounded-xl border border-gray-300 focus:ring-orange-700 focus:outline-none"
        />
        <input
          type="text"
          name="author"
          placeholder="Filter by Author"
          value={filters.author}
          onChange={handleFilterChange}
          className="p-2 rounded-xl border border-gray-300 focus:ring-orange-700 focus:outline-none"
        />
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleCardClick(book)}
          >
            <h3 className="font-bold text-lg text-gray-900">{book.title}</h3>
            <p className="text-sm text-gray-800">
              {book.authors?.map((a) => a.name).join(', ') || 'Unknown'}
            </p>
            {/* <p className="text-sm text-gray-700">
              Year: {book.copyright_year || 'Unknown'}
            </p> */}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-orange-700 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-medium text-gray-800">Page {page} of 3</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, 3))}
          disabled={page === 3}
          className="px-4 py-2 bg-orange-700 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookCatalogue;
