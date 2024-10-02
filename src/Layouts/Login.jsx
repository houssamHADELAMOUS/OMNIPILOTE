import React, { useState } from 'react';
import { useAuth } from '../user-context/contextapi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth(); // Utiliser le contexte
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email }; // Remplacez par des données réelles
        login(userData); // Appeler la fonction login
        navigate('/dashboard')
        
    };

    return (
      
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">


  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input    className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
          
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        
        </div>
        <div className="mt-2">
          <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
      </div>
    </form>

  
  </div>
</div>
        </>
    );
};

export default Login;
