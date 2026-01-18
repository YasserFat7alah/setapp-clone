import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ArrowLeft, ArrowRight } from "./ui/arrows";

const bgColors = [
    "bg-[#765070]",
    "bg-[#71719A]",
    "bg-[#D9AE89]",
];

const getRandomColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];

const socialData = [
    {
        id: 1,
        quote: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
        name: "Arash Pourhabibi",
        handle: "@ArashPourhabibi",
        icon: <FaTwitter className="text-facebook" />,
        color: getRandomColor(),
    },
    {
        id: 2,
        quote: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
        name: "Mauricio Sanchez",
        handle: "@m741s",
        icon: <RiInstagramFill className="text-instagram" />,
        color: getRandomColor(),
    },
    {
        id: 3,
        quote: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
        name: "Meredith Sweet",
        handle: "@meredith.sweet.silberstein",
        icon: <FaFacebookF className="text-facebook" />,
        color: getRandomColor(),
    },
    // Adding duplicates to simulate more slides for carousel logic
    {
        id: 4,
        quote: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
        name: "Arash Pourhabibi",
        handle: "@ArashPourhabibi",
        icon: <FaTwitter className="text-twitter" />,
        color: getRandomColor(),
    },
    {
        id: 5,
        quote: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
        name: "Mauricio Sanchez",
        handle: "@m741s",
        icon: <RiInstagramFill className="text-instagram" />,
        color: getRandomColor(),
    },
    {
        id: 6,
        quote: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
        name: "Meredith Sweet",
        handle: "@meredith.sweet.silberstein",
        icon: <FaFacebookF className="text-facebook" />,
        color: getRandomColor(),
    },
];

const SocialTestimonials = () => {
    // For now, simpler implementation showing 3 at a time. 
    // real carousel logic with sliding usually requires a library or more complex flex math.
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsPerPage = 3;
    const maxIndex = Math.ceil(socialData.length / itemsPerPage) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
    };

    const visibleItems = socialData.slice(currentIndex * itemsPerPage, (currentIndex * itemsPerPage) + itemsPerPage);

    return (
        <section className="bg-white pt-30 pb-22 px-22.5">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Header Text */}
                    <h2 className="text-3xl md:text-4xl font-bold text-grey-800">
                        Setapp in your words.
                    </h2>
                    {/* Header Subtitle & Social Icons */}
                    <div className="flex items-start ">
                        <p className="text-grey-800 text-[18px] leading-8 max-w-75">
                            What you say about how Setapp powers you up.
                        </p>

                        <div className="flex items-end max-w-75 gap-2.5">
                            <a href="#" className="w-12 h-12 rounded-full bg-facebook flex items-center justify-center transition hover:bg-facebook/80">
                                <FaFacebookF size={20} className="text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-twitter flex items-center justify-center transition hover:bg-twitter/80">
                                <FaTwitter size={20} className="text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-instagram flex items-center justify-center transition hover:bg-instagram/80">
                                <RiInstagramFill size={20} className="text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-youtube flex items-center justify-center transition hover:bg-youtube/80">
                                <FaYoutube size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Arrows */}
                <div className="flex justify-end gap-11.5 my-6.25 text-grey-600">
                    <button onClick={prevSlide}>
                        <ArrowLeft className="w-3.5 h-6" />
                    </button>
                    <button onClick={nextSlide}>
                        <ArrowRight className="w-3.5 h-6" />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                    {visibleItems.map((item) => (
                        <div key={item.id} className="rounded-2xl overflow-hidden flex flex-col h-[400px] bg-gray-100">
                            {/* Top Content */}
                            <div className={`${item.color} p-8 flex-1 m-2.5 rounded-[8px]`}>
                                <p className="text-white text-lg font-medium leading-relaxed ">
                                    {item.quote}
                                </p>
                            </div>

                            {/* Bottom Info */}
                            <div className="bg-social-card-bg p-6 flex justify-between items-center h-[100px]">
                                <div>
                                    <p className="font-bold text-gray-900 text-[15px]">{item.name}</p>
                                    <p className="text-gray-500 text-xs mt-0.5">{item.handle}</p>
                                </div>
                                <div className="text-xl">
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="mt-12 flex justify-center gap-3">
                    {[...Array(maxIndex + 1)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition cursor-pointer ${idx === currentIndex
                                ? "bg-black"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SocialTestimonials;
