export const ArrowRight = ({ className = '', ...props }) => {
    return (
        <svg viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M1.5 1.5L11.5 11.5L1.5 21.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const ArrowLeft = ({ className = '', ...props }) => {
    return (
        <svg viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M11.5 21.5L1.5 11.5L11.5 1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}


