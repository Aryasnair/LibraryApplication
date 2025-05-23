import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const BookDetail = ({ onSelectBook }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    if (location.state && location.state.book) {
      setBook(location.state.book);
    } else {
      fetch(`https://gutendex.com/books/${id}`)
        .then((res) => res.json())
        .then((data) => {
          data.category = data.bookshelves?.[0] || 'Fiction'; // Fallback to dummy
          setBook(data);
        });
    }
  }, [id, location.state]);

  const handleAddToCart = () => {
    onSelectBook(book);
    navigate('/selectedbookdetails');
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* Book Image */}
      {book.formats?.['image/jpeg'] ? (
        <img
          src={book.formats['image/jpeg']}
          alt={book.title}
          className="w-40 h-60 object-cover rounded shadow"
        />
      ) : (
        <div className="w-40 h-60 bg-gray-300 flex items-center justify-center text-gray-600">
          No Image
        </div>
      )}

      {/* Book Info */}
      <div>
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>

        {/* Authors */}
        <p className="mb-2">
          <span className="font-semibold">Authors:</span>{' '}
          {book.authors?.map((a) => a.name).join(', ') || 'Unknown'}
        </p>

        {/* Languages */}
        <p className="mb-2">
          <span className="font-semibold">Languages:</span>{' '}
          {book.languages?.join(', ') || 'Unknown'}
        </p>

        {/* Copyright */}
        <p className="mb-2">
          <span className="font-semibold">Copyright:</span>{' '}
          {book.copyright === false ? 'Public Domain' : 'Protected or Unknown'}
        </p>

        {/* Category */}
        <p className="mb-2">
          <span className="font-semibold">Category:</span> {book.category}
        </p>

        {/* Subjects */}
        {book.subjects && book.subjects.length > 0 && (
          <p className="mb-2">
            <span className="font-semibold">Subjects:</span>{' '}
            {book.subjects.slice(0, 5).join(', ')}
          </p>
        )}

        {/* Publish Year (Not Available in API directly) */}
        {/* <p className="mb-2">
          <span className="font-semibold">Publish Year:</span> Unknown
        </p> */}

        {/* Description or summary (optional) */}
        {book.summaries?.length > 0 && (
          <p className="mb-4">
            <span className="font-semibold">Summary:</span> {book.summaries[0]}
          </p>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-4 px-6 py-2 bg-orange-700 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
