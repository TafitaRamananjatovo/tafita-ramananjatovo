"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: {
      x: "-50%",
      left: "50%",
      right: "auto",
      top: 16,
      opacity: 1,
    },
    scrolled: {
      x: 0,
      left: "auto",
      right: 16,
      top: 24,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    },
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      className="fixed z-50 px-6 py-2 flex items-center justify-between w-full sm:w-auto backdrop-blur-md rounded-full border border-white/30 bg-white/60 shadow-lg dark:bg-gray-900/60 dark:border-gray-700"
    >
      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
        {links.map((link) => (
          <li key={link.hash}>
            <Link
              href={link.hash}
              className={clsx(
                "transition px-3 py-2 rounded-full hover:bg-white/40 dark:hover:bg-gray-800",
                {
                  "text-black dark:text-white font-semibold": activeSection === link.name,
                }
              )}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Image
            src="/tafita.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border-2 border-white shadow-md"
            priority
          />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-2xl text-gray-800 dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 flex flex-col">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className={clsx(
                  "block w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800",
                  {
                    "text-black dark:text-white font-semibold": activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="px-4 py-3 border-t border-gray-200 dark:border-gray-800">
            <Image
              src="/tafita.jpeg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full border-2 border-white shadow-md"
              priority
            />
          </li>
        </ul>
      )}
    </motion.div>
  );
}
