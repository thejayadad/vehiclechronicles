'use client';

import React from 'react';
import { FaCar, FaPlus } from 'react-icons/fa';
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

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex">
      <Navigation
        routes={routes}
        layout="row"
        activePath={pathname}
        logo={<span className="font-bold text-lg">MyApp</span>} // Add a logo
      />
    </div>
  );
};

export default DesktopNav;
