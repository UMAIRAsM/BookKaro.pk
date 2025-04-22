import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#CE1B19] text-white py-10">
      <div className="container mx-auto px-4">
        {/* BookKaro.pk heading */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-extrabold text-yellow-400">
            BookKaro.pk
          </h1>
        </div>

        {/* Footer Links Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
              <li><a href="/faq" className="hover:text-yellow-400 transition">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Instagram</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>📍 Address: 123 Main St, City</li>
              <li>📞 Phone: +123 456 7890</li>
              <li>✉️ Email: support@bookkaro.pk</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <form>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 mb-4 text-black rounded-lg border-black"
              />
              <button type="submit" className="w-full bg-yellow-400 py-2 rounded-lg text-black hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-sm">
          <p>&copy; {new Date().getFullYear()} BookKaro.pk. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
