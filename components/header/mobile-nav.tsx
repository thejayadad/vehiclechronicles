'use client';

import React from 'react';
import { FaCar, FaPlus } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import SignOut from './signout-btn';
import { usePathname } from 'next/navigation';
import Navigation from './navigation';

const routes = [
  {
    id: 'vehicles',
    label: 'Vehicles',
    href: '/',
    icon: FaCar,
  },
  {
    id: 'new',
    label: 'Post',
    href: '/new',
    icon: FaPlus,
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="block lg:hidden">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-500 text-white hover:shadow-lg transition-all duration-300"
          >
            <FiMenu className="text-2xl" />
            {/* <span className="text-sm font-medium">Menu</span> */}
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <Navigation
              routes={routes}
              layout="col"
              activePath={pathname}
              logo={<span className="font-bold text-lg">MyApp</span>} // Logo
              footer={
                // 'CopyRight @thejayadad'
                <div className='text-center'>
                    Copy Right
                </div>
              } // Footer
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
