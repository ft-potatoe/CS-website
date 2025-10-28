// components/home/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Target } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${mounted ? 'animation-delay-0' : ''}`}></div>
        <div className={`absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${mounted ? 'animation-delay-2000' : ''}`}></div>
        <div className={`absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${mounted ? 'animation-delay-4000' : ''}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="w-4 h-4" />
              <span>TRANSFORMING LIVES, IGNITING HOPE
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Empowering Communities
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Through Compassion
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 max-w-2xl">
            We are a non-profit, non-political, non-religious organization working towards community development and social welfare. <br/>
{/* අප ප්‍රජා සංවර්ධනය හා සමාජ සුභසාධනය වෙනුවෙන් කටයුතු කරන ලාභ නොලබන, දේශපාලනික නොවන, ආගමික නොවන සංවිධානයකි  <br/>
நாங்கள் இலாப நோக்கம், அரசியல் செல்வாக்கு மற்றும் மதசார்புகள் அற்ற, சமூக நலன்கள் மற்றும் மேம்பாட்டை மாத்திரம் கருத்திற்கொண்டு செயற்படும் ஒரு நிறுவனமாகும். <br/>    */}
        </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/donate"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Donate Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                View Projects
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Families Helped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Active Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Volunteers</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual Cards */}
          <div className="relative hidden lg:block lg:mt-22">
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 - Volunteer */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Become a Volunteer</h3>
                <p className="text-sm text-gray-600 mb-4">Join our team and make a direct impact in your community.</p>
                <Link href="/volunteer" className="text-blue-600 font-medium text-sm hover:underline">
                  Apply Now →
                </Link>
              </div>

              {/* Card 2 - Get Help */}
              <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 mt-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Assistance?</h3>
                <p className="text-sm text-gray-600 mb-4">We're here to help. Apply for our support programs.</p>
                <Link href="/apply-for-help" className="text-purple-600 font-medium text-sm hover:underline">
                  Learn More →
                </Link>
              </div>

              {/* Card 3 - Our Mission */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 col-span-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-sm text-white/90">
                  To create a world where everyone has access to basic necessities and opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
