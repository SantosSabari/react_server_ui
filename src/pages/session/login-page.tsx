import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserLogin{
  email:string,
  password:string
}
const LoginPage = () => {
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
  const [showPW, setShowPW] = useState(false)
   const userLogin =(e:any) =>{
    e.preventDefault();
      const users:UserLogin ={
        email:userEmail,
        password:userPassword
      }

      console.log(users)

      navigate('/home')
      

   }

   const toggleEye =()=>{
      setShowPW((prevState) => !prevState);
   }

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900">Sign in to your account</h2>
          <form className="mt-8 space-y-6" onSubmit={userLogin}>
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(event) =>setEmail(event.target.value)}
                />
              </div>
              <div className="-mt-px">
                <label htmlFor="password" className="sr-only">Password</label>
               
                <input
                  id="password"
                  name="password"
                  type={showPW ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(event) =>setPassword(event.target.value)}
                />
                {showPW === false ?
                  <div className='' onClick={toggleEye}>Eye</div> : 
                  <div className=''onClick={toggleEye}>No Eye</div>
                }
                
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div> 
   
    );
  };
  
  export default LoginPage;