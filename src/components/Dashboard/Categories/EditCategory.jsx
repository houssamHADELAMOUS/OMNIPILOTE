import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function EditCategory() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {}; // Get the category passed through state
  const [name, setName] = useState(category ? category.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update the category in your state/store (not shown here)
    // After updating, navigate back to categories
    navigate('/dashboard');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl mb-4">Edit Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Category Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditCategory;
