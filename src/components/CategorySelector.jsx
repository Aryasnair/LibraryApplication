const categories = ['Fiction', 'Science', 'History', 'Philosophy'];

const CategorySelector = ({ selected, onSelect }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-gray-700 font-medium">Select Category:</label>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-2 rounded-lg text-white font-medium 
              ${selected === category ? 'bg-orange-700' : 'bg-gray-400 hover:bg-orange-600'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
