import React from 'react'

export const DropDown = ({ children }) => {
    return (
        <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg text-sm z-50 overflow-hidden border border-gray-700">
            {children}
        </div>
    )
}


