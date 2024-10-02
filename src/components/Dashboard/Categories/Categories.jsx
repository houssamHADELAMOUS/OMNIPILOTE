import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  // des donne statice
  const [categories, setCategories] = useState([
    { id: 1, name: 'Copieurs, imprimantes & multifonctions' },
    { id: 2, name: 'Smartphone, Tablette, PC, Laptop, PDA' },
    { id: 3, name: 'Accessoires de bureau' },
    { id: 4, name: 'Matériel informatique' },
    { id: 5, name: 'Écrans et Moniteurs' },
    { id: 6, name: 'Systèmes de son et audio' },
    { id: 7, name: 'Équipement de vidéoconférence' },
    { id: 8, name: 'Consommables d’impression' },
    { id: 9, name: 'Logiciels et applications' },
    { id: 10, name: 'Réseau et Internet' },
    { id: 11, name: 'Mobilier de bureau' },
    { id: 12, name: 'Cameras et sécurité' },
    { id: 13, name: 'Drones et accessoires' },
    { id: 14, name: 'Tablettes graphiques' },
    { id: 15, name: 'Gadgets électroniques' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (category) => {
    navigate('/editcategories', { state: { category } });
  };

  const handleRemove = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto">
      {/* Section de recherche */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Catégorie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Rechercher
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Annuler
        </button>
      </div>

      {/* Tableau des catégories */}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-100 text-left uppercase font-semibold text-sm">
              Catégories produits
            </th>
            <th className="py-3 px-6 bg-gray-100 text-center uppercase font-semibold text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(category => (
            <tr key={category.id}>
              <td className="py-4 px-6">{category.name}</td>
              <td className="py-4 px-6 text-center space-x-2">
                <button 
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(category)}
                >
                  {/* Edit Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                  </svg>
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRemove(category.id)}
                >
                  {/* Remove Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                    <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center space-x-4 m-4">
        <button 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
        </button>
        <span className="font-semibold ">Page {currentPage} sur {totalPages}</span>
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
        </button>
      </div>
    </div>
  );
}

export default Categories;
