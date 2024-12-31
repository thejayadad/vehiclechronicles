import React from 'react';
import { IconType } from 'react-icons';
import NavLink from './nav-link';

interface NavigationProps {
  routes: {
    id: string;
    label: string;
    href: string;
    icon: IconType;
  }[];
  layout: 'row' | 'col'; // Determines the layout (row for DesktopNav, col for MobileNav)
  logo?: React.ReactNode; // Optional logo
  footer?: React.ReactNode; // Optional footer
  activePath: string; // Current active path
}

const Navigation: React.FC<NavigationProps> = ({ routes, layout, logo, footer, activePath }) => {
  return (
    <div
      className={`flex ${layout === 'col' ? 'flex-col' : 'flex-row items-center'} gap-4`}
    >
      {/* Logo Section */}
      {logo && <div className="logo flex items-center">{logo}</div>}
      
      {/* Links */}
      {routes.map((route) => (
        <NavLink
          key={route.id}
          href={route.href}
          label={route.label}
          icon={route.icon}
          isActive={activePath === route.href}
        />
      ))}

      {/* Footer Section */}
      {footer && <div className="mt-auto">{footer}</div>}
    </div>
  );
};

export default Navigation;
