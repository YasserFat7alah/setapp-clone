import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ArrowLeft, ArrowRight } from "./ui/arrows";
import img01 from '../assets/carousel/image01.png'

const testimonials = [
    {
        id: 1,
        quote: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
        name: "Jason Staczek",
        role: "Musician & Producer",
        image: img01,
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" // Placeholder video
    },
    {
        id: 2,
        quote: "Setapp helps me discover new tools that completely transform how I manage my daily workflow and productivity.",
        name: "Sarah Jenkins",
        role: "Digital Nomad",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" // Placeholder video
    },
    {
        id: 3,
        quote: "The variety of apps available is astounding. It's like having a superpower for my Mac.",
        name: "David Chen",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1" // Placeholder video
    }
];

const CarouselSection = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentSlide = testimonials[currentIndex];

    return (
        <section className="relative w-full bg-linear-to-b from-grey-800 from-50% to-white to-50%">


            <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
                {/* Main Card */}
                <div className="bg-carousel-purple rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative h-[735px]">
                    {/* Nav Arrows */}
                    <div className="absolute top-16 right-10 flex gap-11.5 h-6 z-20">
                        <button onClick={prevSlide} className="cursor-pointer hover:opacity-75 transition">
                            <ArrowLeft />
                        </button>
                        <button onClick={nextSlide} className="cursor-pointer hover:opacity-75 transition">
                            <ArrowRight />
                        </button>
                    </div>

                    {/* Video Overlay */}
                    {showVideo && (
                        <div className="absolute inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10">
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-60 bg-white/10 p-2 rounded-full backdrop-blur-sm cursor-pointer"
                            >
                                <IoMdClose size={24} />
                            </button>
                            <div className="w-full h-full max-w-4xl max-h-[80vh] rounded-xl overflow-hidden shadow-2xl bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={currentSlide.videoUrl}
                                    title="Video Preview"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Left Content */}
                    <div className="absolute min-w-[60%] flex-1 px-10 md:px-23 flex flex-col justify-between z-10">

                        <div
                            key={currentIndex}
                            className="space-y-8 max-w-lg mt-52.5 animate-fade-in"
                        >
                            <div className="min-h-[120px]">
                                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                                    {currentSlide.quote}
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold tracking-wide text-white/60">
                                    {currentSlide.name}
                                </p>
                            </div>

                            {/* Play Button */}
                            <div className="pt-30">
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className="w-18.5 h-18.5 bg-white rounded-full flex items-center justify-center pl-1 cursor-pointer hover:scale-105 transition shadow-lg"
                                >
                                    <FaPlay className="text-md text-grey-300" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <img
                        key={currentSlide.id}
                        src={currentSlide.image}
                        alt={currentSlide.name}
                        className="w-170 h-full object-cover mix-blend-normal animate-fade-in absolute right-0"
                    />
                </div>

                {/* Pagination Dots */}
                <div className="mt-12 flex justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition cursor-pointer ${index === currentIndex
                                ? "bg-black scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CarouselSection;
