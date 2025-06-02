"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl text-indigo-400">🚀</span>
            <h2 className="text-lg font-bold tracking-tight">Crypto Pulse</h2>
          </div>
          <p className="text-sm text-gray-400">
            Your gateway to the crypto world. Track prices, manage your portfolio, and stay ahead with the latest news.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-indigo-400 transition-colors">
                Live Market
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-400 transition-colors">
                Portfolio Tracker
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-400 transition-colors">
                Crypto News
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-400 transition-colors">
                Educational Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Connect with Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://twitter.com" target="_blank" className="hover:text-indigo-400 transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://discord.gg" target="_blank" className="hover:text-indigo-400 transition-colors">
                Discord Community
              </a>
            </li>
            <li>
              <a href="mailto:hello@cryptopulse.com" className="hover:text-indigo-400 transition-colors">
                Email Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Crypto Pulse. All rights reserved.
      </div>
    </footer>
  );
}
