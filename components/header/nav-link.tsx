import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface NavLinkProps {
  href: string;
  label: string;
  icon: IconType;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon: Icon, isActive }) => {
  return (
    <Link
      href={href}
      className={`flex items-center hover:bg-gray-200 space-x-2 btn px-4 py-2 rounded-md transition-all duration-200 ${
        isActive ? 'bg-gray-500 text-white' : 'text-gray-700 hover:bg-gray-200'
      }`}
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
