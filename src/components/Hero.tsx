"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-black py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Stay Ahead in Crypto
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Track your crypto assets in real-time. Get insights, manage your portfolio, and make smarter decisions.
          </p>
          <Link href="/signup" className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/hero.jpg"  // Replace with your own image path
            alt="Crypto Illustration"
            width={500}
            height={400}
            className="mx-auto"
          />
        </div>

      </div>
    </section>
  );
}
