// Mariam Abdelrahman
import { LogOut, Moon, Sun, Bell,TextAlignJustify } from 'lucide-react'; 
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Navigate, useNavigate } from 'react-router-dom';
import {useAuth}  from '../../contexts/AuthContext';

import { SidebarContext } from '../../contexts/SidebarContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const { toggleSidebar } = useContext(SidebarContext);
  const isLight = theme === 'light';
  const [isNavExpanded,setIsNavExpanded]=useState(true);
  const navigate=useNavigate()
  const {logout}=useAuth();
  
    
  
const handleLogout = async () => {
  if(logout){
    await logout();   
  }
 navigate('/login');
 console.log("loggedout successfully");

};
 
  const ThemeIcon = isLight ? Moon : Sun;

  return (
    <header className="bg- fixed top-0 right-0  w-full z-10 bg-(--bg-primary) ml-auto h-18 px-4 py-2 flex justify-between items-center border-b border-gray-200">
      <div className="leftSide flex items-center">
        
        <button onClick={toggleSidebar} className='size-11 mr-2 lg:hidden flex items-center  text-(--text-primary) hover:shadow-md cursor-pointer border border-gray-200 justify-center text-center rounded-xl text-2xs'>
        <TextAlignJustify size={20}/>
        </button>
        
        
        <div>
          <img src="/images/Market logo .jpg" className="w-22 h-12 mr-2" alt="Logo" />
        </div>
        <div className=" hidden md:flex flex-col justify-center items-start">
          <h2 className="font-bold  text-(--text-primary) ">eCommerce Dashboard</h2>
          <p className="text-gray-400 text-xs">E-Commerce Admin Panel</p>
        </div>
      </div>

      <div className="rightSide flex items-center">
        <ul className='flex items-center'>
          
          <li className='relative  flex justify-center items-center rounded-xl  text-2xs size-11 mx-1 border-gray-300 border cursor-pointer hover:shadow-md text-black'>
            <span className='absolute  top-2 right-2 size-2 rounded-full bg-red-500'></span>
            <Bell size={20} className=' text-(--text-primary)' />
          </li>

          
          <li className='flex justify-center items-center hover:shadow-md text-black size-11 rounded-xl p-3 mx-1  border border-gray-300 cursor-pointer hover:shadow-md>'>
            <button 
              onClick={toggleTheme} 
              className="flex items-center cursor-pointer justify-center  shadow-sm rounded-full"
            >
              <ThemeIcon size={20} className=' text-(--text-primary)'/>
            </button>
          </li>

         
          <li className='hidden md:flex  items-center gap-3 mx-1 bg-blue-50 rounded-xl px-3 py-1'>
            <div className='rounded-full flex items-center justify-center size-11 font-bold bg-indigo-400 text-white'>
              AA
            </div>
            <div>
              <p className='text-black font-bold'>Admin Account</p>
              <p className='text-gray-400 text-xs'>Admin</p>
            </div>
          </li>

        
          <li>
            <button 
              onClick={handleLogout} 
              className='flex text-xs cursor-pointer justify-center items-center gap-1 lg:w-30 lg:h-10 lg:-px-4 lg:py-2  size-11 mx-1 bg-red-400 hover:bg-red-500 rounded-xl text-white border-red-500 border'
            >
              <LogOut size={20}/> <p className='hidden lg:flex '>Log out</p>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}