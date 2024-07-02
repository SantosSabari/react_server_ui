import React, { useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeAction } from '../redux/actions/theme.actions';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const Navbar = () => {
const dispatch = useDispatch()
const state = useSelector((state: RootState) => state.theme);
const isDark = state.isDark
console.log(isDark)
// const [isDark, setDarkTheme] = useState(false);
// const toggleTheme =() =>{
    
//     setDarkTheme((preState) =>!preState)
//     console.log(isDark)
//     dispatch(setThemeAction(isDark))
// }

    const setDarkTheme = () => {
        const myTheme = !isDark
        dispatch(setThemeAction((myTheme)))
    }
  return (
    <nav className={`bg-blue-500 p-4 ${isDark === true ? 'dark' : ''}`}> 
      <div className="container mx-auto flex justify-between items-center">
      <Link to='/' className="text-white text-lg font-bold">My Website</Link>
        <div className="hidden md:flex space-x-4">
          <Link to='/dashboard' className="text-white hover:bg-blue-700 px-3 py-2 rounded">Dashboard</Link>
          <Link to='/about' className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</Link>
          <Link to='/contact' className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>
        </div>
        <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none"
            >
               { isDark  === true?
                <WbSunnyIcon onClick={setDarkTheme}></WbSunnyIcon> :
                <ModeNightIcon onClick={setDarkTheme}></ModeNightIcon>
               } 
                
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
