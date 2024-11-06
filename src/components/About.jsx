import React from 'react';

function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-w-3 aspect-h-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
              alt="Profile"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              A passionate developer with experience in building modern web applications.
              Specialized in JavaScript, React, and Node.js. Always eager to learn new
              technologies and solve complex problems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  B.S. Computer Science<br />
                  University Name, 2020
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Senior Developer<br />
                  Company Name, 2020-Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;