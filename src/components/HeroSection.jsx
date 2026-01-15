import React from 'react'
import wifi from '../assets/hero/wifi.svg';
import plan from '../assets/hero/plan.svg';
import converter from '../assets/hero/converter.svg';
import manage from '../assets/hero/manage.svg';
import code from '../assets/hero/code.svg';

import pics from '../assets/hero/pics.svg';
import macpaw from '../assets/hero/macpaw.svg';
import pdf from '../assets/hero/pdf.svg';
import teamwork from '../assets/hero/teamwork.svg';
import secure from '../assets/hero/secure.svg';

import apple from '../assets/brands/apple.svg';
import google from '../assets/brands/google.svg';
import Button from './ui/Button';

const HeroSection = () => {
  return (
    <section className="relative pt-33 pb-32 flex flex-col items-center text-center overflow-hidden">

      {/* Right Images */}
      <img src={wifi} alt="wifi" className="absolute top-45 right-17.5" />
      <img src={plan} alt="plan" className="absolute top-60.5  right-48.5" />
      <img src={manage} alt="manage" className="absolute top-113.5 right-28.5" />
      <img src={converter} alt="converter" className="absolute top-88.25 right-14" />
      <img src={code} alt="code" className="absolute top-139.5 right-33.25" />

      {/* Left Image */}
      <img src={pics} alt="pics" className="absolute top-41 left-29" />
      <img src={macpaw} alt="macpaw" className="absolute top-73.75 left-28.75" />
      <img src={pdf} alt="pdf" className="absolute top-72 left-55" />
      <img src={teamwork} alt="boost" className="absolute top-114 left-28" />
      <img src={secure} alt="secure" className="absolute top-134 left-27.5" />

      {/* Main Logo */}
      <div className="flex items-center mb-13.5">
        <div className="w-32 h-32 m-4 bg-black rounded-2xl flex items-center justify-center " >
          <img src="/icon.svg" alt="Setapp Logo" className="w-15" />
        </div>
      </div>

      {/* Headline Text */}
      <div className="max-w-140">
        <p className="font-bold text-[64px] leading-16.75">
          Dozens of apps. 
          One subscription.
          $9.99
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 mt-12">
        {/* Main CTA */}
        <button className="bg-white text-grey-800 h-13 px-7 rounded-lg text-[16px] cursor-pointer">
          Try free for 7 days
        </button>

        {/* Apple Icon Button */}
        <Button className="h-13">
          <img src={apple} alt="Apple Logo" className="w-7" />
        </Button>

        {/* Google Icon Button */}
        <Button className="h-13">
           <img src={google} alt="Google Logo" className="w-7" />
        </Button>
      </div>

      {/* Subtext */}
      <p className="mt-8 max-w-[320px] text-center text-lg leading-relaxed">
        Power up your workflow with Setapp, a smart way to get apps.
      </p>
    </section>
  )
}

export default HeroSection