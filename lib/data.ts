import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Digital project Manager",
    location: " Simpifia, LYON",
    description:
      "I graduated after several years of study and immediately found a job as a contractor for Simplifia, based in Madagascar.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Python Developer",
    location: "Tempus Donum,  PARIS",
    description:
      "Currently, I work as a freelance full-stack Python developer. My tech stack includes Python, React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I am open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Internal User Session Tracker",
    description: "Rust-based internal system to manage and monitor user sessions within an enterprise network. Supports session tracking and controlled disconnections.",
    tags: ["Rust", "System Monitoring", "Session Management"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Quantum Key Distribution (CV-QKD)",
    description: "A Python-based academic project simulating quantum key distribution using continuous variables. Focuses on secure communication using quantum mechanics.",
    tags: ["Python", "Quantum", "Encryption", "Security"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Plaque Detection System",
    description: "Computer vision project to detect and analyze plaque in medical images. Built with Python and machine learning tools for image processing.",
    tags: ["Python", "Computer Vision", "Healthcare", "ML"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "CSV Product Importer with Pandas",
    description: "A public tool for importing and exporting CSV data to manage WooCommerce product listings. Automates product creation and updates using Python's Pandas library.",
    tags: ["Python", "Pandas", "CSV", "WooCommerce"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
