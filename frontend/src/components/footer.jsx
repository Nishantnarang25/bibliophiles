const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10 mt-16">
<div className="max-w-screen-xl mx-auto px-20 flex justify-between items-start text-center md:text-left">
       
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Bibliophile's Corner</h2>
          <p className="text-white text-sm">
            A haven for book lovers. Discover, collect, and share your favorite reads.
          </p>
        </div>

        {/* Navigation Links (Aligned with Navbar) */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Navigation</h2>
          <ul className="text-white text-sm space-y-2">
            <li><a href="/" className="hover:text-gray-200 transition">Home</a></li>
            <li><a href="/books" className="hover:text-gray-200 transition">Books</a></li>
            <li><a href="/favorites" className="hover:text-gray-200 transition">Favorites</a></li>
            <li><a href="/about" className="hover:text-gray-200 transition">About</a></li>
          </ul>
        </div>


      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-white/50 pt-5 text-center text-white text-sm">
        © {new Date().getFullYear()} Bibliophile's Corner. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
