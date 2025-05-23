import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectedBookDetails = ({ selectedBooks = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Selected Book Details</h2>

      {selectedBooks.length === 0 ? (
        <p>No books selected.</p>
      ) : (
        <ul className="space-y-6">
          {selectedBooks.map((book) => (
            <li key={book.id} className="p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-6">
              {/* Image */}
              {book.media_type?.['image/jpeg'] && (
                <img
                  src={book.media_type['image/jpeg']}
                  alt={book.title}
                  className="w-32 h-48 object-cover rounded-lg"
                />
              )}

              {/* Book Info */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{book.title}</h3>

                {/* Authors */}
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Authors:</span>{' '}
                  {book.authors?.map((a) => a.name).join(', ') || 'Unknown'}
                </p>

                {/* Category */}
                <p className="text-gray-700">
                  <span className="font-medium">Category:</span> {book.category || 'N/A'}
                </p>

                {/* Languages */}
                <p className="text-gray-700">
                  <span className="font-medium">Languages:</span>{' '}
                  {book.languages?.join(', ') || 'Unknown'}
                </p>

                {/* Summary */}
                {book.summaries?.length > 0 && (
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Summary:</span> {book.summaries[0]}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Back to Book Details
        </button>
        <button
          onClick={() => navigate('/home1')}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Select Another Book
        </button>
      </div>
    </div>
  );
};

export default SelectedBookDetails;