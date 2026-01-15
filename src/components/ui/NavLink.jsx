import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ link }) => {
    return (
        <Link
            to={link.href}
            className="text-[14px] font-medium cursor-pointer"
        >
            {link.name}
        </Link>
    )
}

export default NavLink