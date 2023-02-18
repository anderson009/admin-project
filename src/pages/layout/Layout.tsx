import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/admin' || pathname === '/admin/') {
      navigate('/admin/dashboard', { replace: true });
    }
  }, []);

  return (
    <div className='flex w-full min-h-screen flex-row bg-white'>
      <div>
        <Navbar />
      </div>

      <div className='flex flex-col w-full  min-h-screen mx-14  pt-[100px]'>
        <Outlet />
      </div>
    </div>
  );
}

export {Layout}