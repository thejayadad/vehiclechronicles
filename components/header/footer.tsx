import React from 'react';

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content py-4">
      <div className="container mx-auto text-center">
        <p className="text-[12px]">
          © {new Date().getFullYear()} <span className="font-semibold">VehiclesChronicles</span>. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
