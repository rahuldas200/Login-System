import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password ,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password);
    console.log(password);
  }

  return (
    <div className='h-[100vh] w-[100vw] bg-slate-500 flex justify-center items-center'>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <img src='' className="w-auto h-7 sm:h-8" alt=""/>
            </div>

            <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

            <form onSubmit={handleSubmit}>
              <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg 
                dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400
                dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" 
                type="email" 
                placeholder="Email Address" 
                aria-label="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg
                 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400
                  dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" 
                  type="password" 
                  placeholder="Password" 
                  aria-label="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div className="flex items-center justify-between mt-4">
                <a href="/reset" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

              <Link to={'/login/otp'}>
                <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform
                    bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring
                    focus:ring-blue-300 focus:ring-opacity-50"
                    type='submit'>
                      Sign In
                </button>
              </Link>
              </div>
            </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

          <a href="/register" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
        </div>
      </div>
    </div>
)
}

export default Login
