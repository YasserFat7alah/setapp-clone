import React from 'react'

const QA = ({title, description}) => {
  return (
    <div className='w-300 flex align-top justify-start gap-25 '>
        <h3 className='text-4xl font-bold px-2.5 w-125'>{title}</h3>
        <p className='text-[18px] pl-2.5 pr-11 max-w-150'>{description}</p>
    </div>
  )
}

export default QA