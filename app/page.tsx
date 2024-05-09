
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="w-full py-4 px-6 bg-gray-800 text-white">
        <nav className="flex items-center justify-between max-w-5xl mx-auto">
          <div>
            <Link href="/">
              Home
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#about">
              About
            </Link>
            <Link href="/projects">
              Projects
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </header>
       <div id="about" className="max-w-5xl w-full px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">
          I'm excited to showcase my work and skills as a developer.
        </p>
      </div>

      <section className="bg-white dark:bg-gray-900 w-full py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <h1 className="text-blue -500">I'm blue!</h1>
          {/* Replace the following with your project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Project description goes here.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* Add more project cards here */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Project description goes here.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Project description goes here.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
      <footer className="bg-gray-800 text-white w-full py-8 text-center">
        <div className="max-w-5xl mx-auto">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="#"
              className="text-blue-500 hover:underline font-medium mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-blue-500 hover:underline font-medium"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
