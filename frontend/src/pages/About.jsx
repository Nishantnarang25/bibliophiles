const About = () => {
    return (
      <div className="min-h-[90vh] bg-white text-gray-800 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Heading */}
          <h1 className="text-4xl font-bold text-blue-500 mb-6">About Bibliophile's Corner</h1>
  
          {/* Introduction */}
          <p className="text-lg mb-6">
            Bibliophile's Corner is a digital haven for book enthusiasts, offering a seamless way to explore, organize, and share books. Whether you're an avid reader, a researcher, or someone building a personal library, this platform simplifies book discovery, tracking, and interaction.
          </p>
  
          <p className="text-lg mb-4">
            Designed with an intuitive interface, Bibliophile's Corner provides users with personalized recommendations, categorized book collections, and the ability to engage with a like-minded reading community. It is more than just a book tracking tool; it is a **social hub** for readers worldwide.
          </p>
  
          {/* Features Section */}
          <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-4">Key Features</h2>
  
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li><strong>Comprehensive Book Collection:</strong> A vast and continuously growing library of books spanning various genres, authors, and themes.</li>
            <li><strong>Personalized Bookshelf:</strong> Users can create custom bookshelves, categorize books, and track their reading progress effortlessly.</li>
            <li><strong>Favorites</strong> Save books to favorites</li>
            <li><strong>Advanced Search & Filters:</strong> Quickly find books by title, author, genre, or keywords.</li>
            <li><strong>Seamless UI:</strong> A visually appealing and minimalistic interface that ensures a smooth user experience.</li>
          </ul>
  
          {/* Tech Stack Section */}
          <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-4">Technology Stack</h2>
  
          <p className="text-lg mb-4">
            Bibliophile's Corner leverages a modern and scalable technology stack to deliver a fast and interactive experience.
          </p>
  
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li><strong>Frontend:</strong> Built with <span className="text-blue-500">React.js</span> and styled using <span className="text-blue-500">Tailwind CSS</span> for a sleek, responsive UI.</li>
            <li><strong>Backend:</strong> Powered by <span className="text-blue-500">Node.js</span> and <span className="text-blue-500">Express.js</span>, ensuring efficient API handling and user authentication.</li>
            <li><strong>Database:</strong> Uses <span className="text-blue-500">PostgreSQL</span> for robust data storage and management.</li>
            <li><strong>State Management:</strong> Utilizes <span className="text-blue-500">React Context API</span> for seamless data flow across components.</li>
          </ul>
  
          {/* Future Goals Section */}
          <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-4">Upcoming Features</h2>
  
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li><strong>AI-Based Recommendations:</strong> Smart algorithms to suggest books based on reading history.</li>
            <li><strong>Dark Mode:</strong> An enhanced UI option for a more comfortable reading experience.</li>
            <li><strong>Mobile App:</strong> Expanding to mobile platforms for easy access anytime, anywhere.</li>
            <li><strong>Collaborative Reading Lists:</strong> Users can create shared reading lists with friends or book clubs.</li>
          </ul>
  
          {/* Closing Statement */}
          <h2 className="text-2xl font-semibold text-blue-500 mt-10 mb-4">Our Vision</h2>
  
          <p className="text-lg">
            Bibliophile's Corner is built with the vision of creating an interconnected community of book lovers. We believe in the power of books to inspire, educate, and bring people together.  
            Our goal is to make book discovery effortless, engaging, and social, helping readers build meaningful literary collections while fostering an active reading culture.
          </p>
  
        </div>
      </div>
    );
  };
  
  export default About;
  