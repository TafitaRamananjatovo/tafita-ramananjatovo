"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: {
      x: "-50%", // centered
      left: "50%",
      right: "auto",
      top: 16,
      opacity: 1,
    },
    scrolled: {
      x: 0, // flush right
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
      className="fixed z-50 px-6 py-2 flex items-center backdrop-blur-md rounded-full border border-white/30 bg-white/60 shadow-lg dark:bg-gray-900/60 dark:border-gray-700"
    >
      <ul className="flex items-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
        {links.map((link) => (
          <li key={link.hash}>
            <Link
              href={link.hash}
              className={clsx(
                "transition px-3 py-2 rounded-full hover:bg-white/40 dark:hover:bg-gray-800",
                {
                  "text-black dark:text-white font-semibold":
                    activeSection === link.name,
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
    </motion.div>
  );
}
