import React from 'react';
import Divider from './ui/Divider';
import NavLink from './ui/NavLink';
import LanguageSwitcher from './shared/LanguageSwitcher';

const Navbar = () => {
  const navLinks = [
    { name: 'How it works', href: '/' },
    { name: 'All apps', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'For Teams', href: '/' },
    { name: 'Blog', href: '/' },
    { name: 'Podcast', href: '/' },
  ];

  return (
    <header className="bg-grey-800 h-10 mt-4.25 mx-10 flex items-center justify-between sticky-top">

      {/* --- LEFT: LOGO --- */}
      <a href="/" className="flex items-center gap-3 group">
        <img src="/icon.svg" alt="Setapp Logo" className="w-5 h-8" />
        <div className="w-17.5 h-3.5"></div>
      </a>

      {/* --- RIGHT WRAPPER (Navigation + Actions) --- */}
      <div className="flex items-center gap-7.5">

        {/* Navigation Links (Hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-7.5">
          {navLinks.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
        </nav>

        {/*Vertical Divider */}
        <Divider />

        {/* Actions (Flag, Sign In, Button) */}
        <div className="flex items-center gap-6">

          {/* Language Switcher */}
          <LanguageSwitcher variant="minimal" />

          {/* Sign In Link */}
          <NavLink key="Sign In" link={{ name: 'Sign In', href: '/' }} />

          {/* CTA Button */}
          <button className="border border-white rounded-md text-[14px] font-light cursor-pointer py-1.5 px-5.75">
            Try free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;