import React from 'react';
import { useAuth } from '../../user-context/contextapi';
import Categories from './Categories/Categories';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center  ">
            <h2 className="mb-6 text-2xl font-bold">Tableau de bord</h2>
            <p className=''>Bienvenue,<span className='font-bold text-green-600'> {user?.email} !</span></p>
            <button 
                className="mt-4 p-2 text-white bg-red-500 rounded hover:bg-red-600 flex gap-2"  
                onClick={logout} // Appeler la fonction logout
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg>

                Se déconnecter
            </button>

            <Categories/>
        </div>
    );
};

export default Dashboard;
