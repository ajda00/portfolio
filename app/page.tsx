"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import profilePic from "../src/images/ajda.png";
import topsiProject from "../src/images/topsi-project.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "startups", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div className="relative font-sans min-h-screen bg-[#FCFCFC] dark:bg-[#0A0A0A] overflow-x-hidden">
      {/* Custom cursor effect - very Gen-Z */}
      <div 
        className="pointer-events-none fixed hidden md:block w-6 h-6 rounded-full border-2 border-pink-500 z-50 transition-transform duration-100 ease-out"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Ajda Zajc
          </div>
          
          <div className="hidden md:flex space-x-8">
            {["home", "about", "startups", "projects", "contact"].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className={`capitalize text-sm transition-all hover:text-pink-500 ${activeSection === item ? 'text-pink-500 font-medium' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <div className="w-6 h-6 flex flex-col justify-around cursor-pointer">
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200"></span>
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200"></span>
              <span className="block w-full h-0.5 bg-gray-800 dark:bg-gray-200"></span>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/20 text-pink-500 text-xs font-medium">
                💖 Welcome to my portfolio
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi! I'm <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">AJDA ZAJC</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Software Developer / Designer / Startup Enthusiast
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                >
                  Get in touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  View my work
                </a>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a href="https://github.com/ajda00" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ajda-zajc/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 mx-auto relative overflow-hidden">
                {/* Add your photo to the public directory and update the src path */}
                <Image 
                  src={profilePic} 
                  alt="AJDA ZAJC" 
                  fill 
                  className="object-cover rounded-full p-2"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">Get to know me and my background</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I’m a software developer + designer from Ljubljana, Slovenia, who loves mixing code and creating something new. I like building things from scratch, and making something that works.
                Startups have been my passion for a long time — from building smart collars for cows at MooHero 🐄 to creating my own AI-powered tool for hairdressers with Topsi AI 💇‍♀️. I’ve learned to move fast, adapt even faster, and turn ideas into products that hopefully make sense in the real world.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, I like to visit new places and go outside of my comfort zone. I also like to draw, go horseback riding and have a good time with my family.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="text-gray-800 dark:text-gray-200">Ljubljana, Slovenia</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</h4>
                  <p className="text-gray-800 dark:text-gray-200">27.01.2000</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                  <a href="mailto:ajda.zajc@gmail.com" className="text-pink-500 hover:underline">ajda.zajc@gmail.com</a>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                  <p className="text-gray-800 dark:text-gray-200">+386 40 765 772</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Languages</h4>
                  <p className="text-gray-800 dark:text-gray-200">Slovenian, English</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                  <a href="https://linkedin.com/in/ajdazajc" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">linkedin.com/in/ajdazajc</a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/QiGk8JJ26bw?autoplay=1&mute=1&loop=1&playlist=QiGk8JJ26bw"
                  title="YouTube Shorts video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Startup Passion Section */}
      <section id="startups" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mt-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 My Passion for Startups</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              I've always been drawn to startups because they let me actually make something of my own and see the impact of my work. In fast-moving environments like MooHero and Topsi AI, I've learned to adapt quickly, take on challenges outside my comfort zone, and wear many hats — not just coding, but also managing people, solving problems, and jumping into things that weren't technically "my job."
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              That's what I love most about startups: the chance to grow fast, create something real, and feel like what I do actually matters.
            </p>
              </div>
              <div className="flex-1 relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400">Add your startup journey image here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">This is my most recent project. I am part of the start up with two other girls. Together we are hoping to make a chanege in the hairdressing industry with our AI.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
              <div className="relative aspect-video group">
                <div className="absolute inset-0 overflow-hidden">
                  <Image 
                    src={topsiProject} 
                    alt="Topsi.ai project screenshot" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="flex space-x-2">
                    <a href="https://www.topsi.ai/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm hover:bg-white/30 transition-colors">
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">topsi.ai</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Simplifying the hairdresser’s day-to-day process. Topsi AI takes the chaos out of your day — giving you color confidence and client clarity, all in one place.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Angular", "TypeScript", "Ionic", "Capacitor", "iOS", "Android"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">Have a project in mind? Let's work together!</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4 md:mb-0">
              Ajda Zajc
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/ajda00" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ajda-zajc/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AJDA ZAJC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
