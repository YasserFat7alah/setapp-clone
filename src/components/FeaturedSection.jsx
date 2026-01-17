import React from 'react'
import QA from './featured-section/QA';
import cmm from '../assets/featured/icon-cmm.png';
import cmmBig from '../assets/featured/cmm-big.png';
import codeRunner from '../assets/featured/coderunner.png';
import codeIcon from '../assets/featured/codeIcon.png';
import meteer from '../assets/featured/meeter.png';
import meteerIcon from '../assets/featured/meeterIcon.png';
import {Card, CardContent, CardHead} from './containers/Card';

const FeaturedSection = () => {

  const features = [
    {
      title: 'Keep your Mac clean',
      description: 'With a single monthly subscription at $9.99, you get 240+ apps for your Mac.',
      icon: cmm,
      img: cmmBig,
    },
    {
      title: 'Write code',
      description: 'Create applications in more than 25 languages.',
      icon: codeIcon,
      img: codeRunner,
    },
    {
      title: 'Join meetings in a click',
      description: 'Quickly access links to your meetings from menu bar.',
      icon: meteerIcon,
      img: meteer,
    },
  ]
  return (
    <section className="mx-32.5 my-5 border-y border-grey-100">
      <div className="mt-25 mb-22">

        {/* --- Teaser --- */}
        <QA title="What you get on Setapp." description="With a single monthly subscription at $9.99, you get 240+ apps for your Mac." />

        {/* --- Cards Grid Layout --- */}
        <div className="grid grid-cols-2 gap-8 ">

          {/* Large Card (Clean Mac) */}
          <Card bgColor='bg-card-pink'
                className="col-span-2 pt-15 mt-22 min-h-120">

            {/* Text Content */}
            <CardContent className="w-full pl-15 gap-8 text-grey-800">
              {/* Icon */}
              <img src={features[0].icon} alt="Setapp Logo" className="w-20 h-20" />
              <CardHead title={features[0].title} description={features[0].description} />
            </CardContent>

            {/* Image */}
            <div className="grow relative mt-4 w-full px-9.25">
              <img src={features[0].img} alt="cmm big image" className="w-full h-full object-cover" />

            </div>
          </Card>

          {/* Small Card (code editor) */}
          <Card bgColor='bg-card-grey'>

            {/* Image */}
            <div className="w-full flex justify-center items-center">
              <img
                src={features[1].img}
                alt="code editor"
                className="h-auto w-full"
              />
            </div>

            {/* Text Content */}
            <CardContent className="flex flex-col items-start text-grey-800 mb-15 ms-15 z-10">
              {/* Icon */}
              <img src={features[1].icon} alt="icon" className="w-20 h-20 mb-4.75" />

              {/* Title and Description */}
              <CardHead title={features[1].title} description={features[1].description} />
            </CardContent>

          </Card>

          {/* Small Card (Meetings) */}
          <Card bgColor='bg-card-blue' className="pt-15">

            {/* Text Content */}
            <CardContent className="flex-col items-start text-white mb-15 ms-15 z-10">
              {/* Icon */}
              <img src={features[2].icon} alt="icon" className="w-20 h-20 mb-4.75" />

              {/* Title and Description */}
              <CardHead title={features[2].title} description={features[2].description} />
            </CardContent>
            
            {/* Image - Centered at the top with shadow and rounded corners */}
            <div className="w-full flex justify-center items-center">
              <img
                src={features[2].img}
                alt="code editor"
                className="h-auto w-full"
              />
            </div>
          </Card>

        </div>

        {/* --- Footer Link --- */}
        <div className="my-25 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#C68098] transition-colors">
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 1.5L24.188 10L14.5 18.5M1.5 10.106H23.816" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            
            <span className="text-xl font-medium">View all superpowers</span>
            
          </a>
        </div>


         {/* --- Teaser --- */}
        <QA title="Your Setapp journey." description="Type in your task into Setapp search and get instant app recommendations." />
      </div>
    </section>
  )
}

export default FeaturedSection;