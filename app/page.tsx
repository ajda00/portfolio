"use client";

import Image from "next/image";
import { useState } from "react";
import profilePic from "../src/images/ajda.png";
import topsiProject from "../src/images/topsi-project.png";
import azGradient from "../src/images/AZ-gradient.svg";
import popsyLogo from "../src/images/popsy.png";
import mooheroLogo from "../src/images/MooHero.svg";
import topsiLogo from "../src/images/topsi.svg";
import ajdaWalking from "../src/images/ajda-2.png";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please fill out all fields.'
      });
      return;
    }
    
    // Submit form
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: data.message || 'Message sent successfully!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };
  
  return (
    <div className="relative font-sans min-h-screen bg-[#FCFCFC] dark:bg-[#0A0A0A] overflow-x-hidden">
      {/* Custom cursor effect removed */}
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="mb-4 md:mb-0">
              <Image src={azGradient} alt="Ajda Zajc" width={80} height={40} className="h-8 w-auto" />
            </div>
          
          <div className="hidden md:flex space-x-8">
            {["home", "about", "startups", "projects", "contact"].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className="capitalize text-sm transition-all hover:text-pink-500 text-gray-600 dark:text-gray-300"
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
              <div className="w-64 h-64 md:w-80 md:h-96 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 mx-auto relative overflow-hidden">
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
              I'm a software developer and designer from Ljubljana, Slovenia, who loves creating things from scratch and bringing new ideas to life.
              Startups have been my passion throughout my adult life. From building a smart collar app for cows at MooHero 🐄 to creating an AI-powered tool for hairdressers with Topsi AI 💇‍♀️. Along the way, I've learned to move fast, adapt even faster, and turn ideas into real, working products.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Outside of work, I love discovering new places and pushing myself out of my comfort zone. I also enjoy drawing, horseback riding, and spending time with my family.
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
      
      {/* Employment History Section */}
      <section id="employment" className="py-16 md:py-24 bg-white dark:bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Employment History</h2>
            <p className="text-gray-600 dark:text-gray-300">My professional journey and experience</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Topsi.ai */}
            <div className="relative pl-8 border-l-2 border-pink-500">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image src={topsiLogo} alt="Topsi.ai" width={20} height={20} className="rounded-full" />
              </div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold">COO & Developer & Co-founder, Topsi.ai</h3>              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Jan 2025 — Present</p>
              <p className="text-gray-600 dark:text-gray-300">
                Creating an AI-powered tool for hairdressers that simplifies their day-to-day process, giving them color confidence and client clarity all in one place.
              </p>
            </div>
            
            {/* MooHero */}
            <div className="relative pl-8 border-l-2 border-pink-500">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image src={mooheroLogo} alt="MooHero" width={20} height={20} className="rounded-full" />
              </div>
              <div className="mb-1">
                <h3 className="text-xl font-bold">Software Developer / Designer, MooHero</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Ljubljana</p>
              <p className="text-gray-600 dark:text-gray-300">
                Creating the UI interface at a rapidly growing startup that creates smart collars with heat detection, where I've learned to adapt quickly and deliver solutions in a dynamic environment.
              </p>
            </div>
            
            {/* Popsy */}
            <div className="relative pl-8 border-l-2 border-pink-500">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image src={popsyLogo} alt="Popsy" width={20} height={20} className="rounded-full" />
              </div>
              <div className="mb-1">
                <h3 className="text-xl font-bold">Software Developer, Popsy</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Jun 2021 — Jan 2023</p>
              <p className="text-gray-600 dark:text-gray-300">
              Built a no-code website builder that was accepted into Y Combinator.
              </p>
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
                Startups attract me because they’re never monotone and my work has a direct impact. In fast-moving environments like MooHero and Topsi AI, I've learned to adapt quickly and take on challenges outside my comfort zone — not just coding, but also managing people, solving problems, and jumping into things that weren't technically "my job."
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
            It’s taught me to stay flexible, keep learning, and not overthink titles with the goal to build something that works and helps people.            </p>
          </div>
          <Image 
            src={ajdaWalking} 
            alt="Ajda walking"  
            className="rounded-xl max-w-[20rem]" 
          />
          </div>
        </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">This is my most recent project. I am part of the start up with two other girls. Together we are hoping to make a change in the hairdressing industry with our solution that uses at it’s core.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Topsi.ai Project */}
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {formStatus.message && (
                <div className={`p-4 rounded-lg ${formStatus.isError ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'}`}>
                  {formStatus.message}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                    disabled={formStatus.isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                    disabled={formStatus.isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tell me about your project..."
                  disabled={formStatus.isSubmitting}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
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
            <div className="mb-4 md:mb-0">
              <Image src={azGradient} alt="Ajda Zajc" width={80} height={40} className="h-8 w-auto" />
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
