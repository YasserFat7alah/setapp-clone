import React from 'react';

/* Card */
export const Card = ({ children, bgColor = "bg-white", className = "" }) => {
  return (
    <div className={`${bgColor} rounded-4xl relative overflow-hidden flex flex-col group ${className}`}>
      {children}
    </div>
  );
};

/* CARD BODY */
export const CardContent = ({children, className}) => { 
    return (
        <div className={`flex w-full ${className}`}>
            {children}
        </div>
    )
}

/* CARD HEAD */
export const CardHead = ({title, description}) => { 
    return (
        <div>
            <h3 className="text-[26px] font-bold mb-2">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    )
}


