import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useLanguageStore, { languages } from "../../store/useLanguageStore";
import { DropDown } from "../ui/DropDown";

const LanguageSwitcher = ({ variant = "full" }) => {
    const [open, setOpen] = useState(false);
    const { language, setLanguage } = useLanguageStore();
    const dropdownRef = useRef(null);

    const current = languages.find((l) => l.code === language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger */}
            <div
                onClick={() => setOpen(!open)}
                className={`flex items-center cursor-pointer hover:text-white transition ${variant === "full" ? "gap-2 text-sm mt-4 md:mt-0" : ""
                    }`}
            >
                <img
                    src={current.flag}
                    alt={current.label}
                    className={`object-cover ${variant === "full" ? "w-4 h-4" : "w-5 h-auto rounded-xs"
                        }`}
                />

                {variant === "full" && (
                    <>
                        <span>{current.label}</span>
                        <IoIosArrowDown
                            className={`transition ${open ? "rotate-180" : ""}`}
                        />
                    </>
                )}
            </div>

            {/* Dropdown */}
            {open && (
                <DropDown>
                    {languages.map((item) => (
                        <div
                            key={item.code}
                            onClick={() => {
                                setLanguage(item.code);
                                setOpen(false);
                            }}
                            className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-[#3a3f47] transition ${language === item.code ? "bg-[#3a3f47]" : ""
                                }`}
                        >
                            <img
                                src={item.flag}
                                alt={item.label}
                                className="w-5 h-4 object-cover rounded-sm"
                            />
                            <span className="text-gray-200">{item.label}</span>
                        </div>
                    ))}
                </DropDown>
            )}
        </div>
    );
};

export default LanguageSwitcher;
