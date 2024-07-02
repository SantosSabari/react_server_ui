// import React, { useState } from 'react';
// import './App.css';
// import ProfileCard from './components/profile-card';
// import Timer from './components/timer';

// interface Profile {
//   profilePic:string;
//   firstName:string;
//   lastName:string;
//   email:string;
//   phoneNumber:string
// }
// export const ThemeContext = React.createContext('light');
// function App() {
//   const [message, setMessage] = useState('');
//   const [profile, setProfile] = useState<Profile>()
//   const [theme, setTheme] = useState('light');
//   const activeProfileCard =() =>{
//     setMessage('Hello This is India');

//     const profile ={
//       profilePic:'Sabari',
//       firstName:'Sabari',
//       lastName:'Santos',
//       email:'santossabari@getMaxListeners.com',
//       phoneNumber:'87865657899'
//     }
//     setProfile(
//       profile
//     )
//   }

//   const handleMessageChange = (newMessage: string) => {
//     setMessage(
//       newMessage
//     )
//   };
//   return (
//     <>
//     <ThemeContext.Provider value={theme}>
//         <div className="App">
//           {/* <h2>Hello World ----------- {message}</h2>
//            */}
//           <button className='bg-blue-500 hover:bg-dark-700 text-white font-bold py-2 px-4 rounded' onClick={() => setTheme('dark')}>Dark</button>
//           <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setTheme('light')}>light</button>
//           <ProfileCard profile={profile} onMessageChange={handleMessageChange}> </ProfileCard>
//           <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={activeProfileCard}>Click Here</button>
//           <Timer/>
//         </div>
//     </ThemeContext.Provider>
//     </>
//   );
// }

// export default App;


import React from 'react'
import Navbar from './components/navbar'
import { RootState } from './store';
import { useSelector } from 'react-redux';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/session/login-page';

import Errorpage from './pages/errorpage';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Contacts from './pages/contacts';
import { Home } from '@mui/icons-material';

// const Routers = createBrowserRouter(
//   [

//     {
//       path: "/",
//       element: <LoginPage />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//       errorElement: <Errorpage />,
//     },
//     {
//       path:"/dashboard",
//       element: <Dashboard />
//     },
//     {
//       path:"/contact",
//       element: <Contacts />
//     },
//     {
//       path:"/js",
//       element: <Javascript />
//     },
    
//     // {
//     //   path:"*",
//     //   element:<Errorpage/>
//     // }
//   ]
// )

const App = () => {
  // const [theme, setTheme] = useState('')
  const theme = useSelector((state: RootState) => state.theme);

  



  return (
    
    <Router>
      <div className={`App ${theme.isDark ? 'dark' : ''}`}>
        <Navbar />
        <div className="container mx-auto px-10 mt-5">
          <Routes>
            <Route path="/" element={<Home />} errorElement={<Errorpage/>}/>
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </div>
      </div>
  </Router>
  )
}

export default App
