import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Icons for social media
import ayush from '..//assets/team/ayush.png';

// Example team data
const teamMembers = [
    {
        name: 'Ayush Roy',
        role: (
            <>
              Technical Lead <br /> Full Stack Developer
            </>
          ),
        image: ayush,
        instagram: 'https://instagram.com/ayushroyl', 
        linkedin: 'https://www.linkedin.com/in/ayushroy',
        github: 'https://github.com/ayushroy',
        twitter: 'https://twitter.com/ayushroy',
    },
    {
        name: 'Rohit Kumar',
        role: 'Frontend Devloper',
        image: ayush,
        instagram: 'https://instagram.com/ayushroyl',
        linkedin: 'https://www.linkedin.com/in/rohitkumar',
        github: 'https://github.com/rohitkumar',
        twitter: 'https://twitter.com/rohitkumar',
    },
    {
        name: 'Shalini Gupta',
        role: 'Backend Developer',
        image: ayush,
        instagram: 'https://instagram.com/ayushroyl',
        linkedin: 'https://www.linkedin.com/in/shalinigupta',
        github: 'https://github.com/shalinigupta',
        twitter: 'https://twitter.com/shalinigupta',
    },
];

const Team = () => {
    return (
        <section id="team" className="bg-gradient-to-b from-[#0b0b22FD] to-[#0f1a3dFD] py-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-8 text-white">Our Technical Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            {/* Team Member Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                            />
                            {/* Team Member Name */}
                            <h3 className="text-xl font-semibold text-yellow-300">{member.name}</h3>
                            {/* Team Member Role */}
                            <p className="text-gray-300 mb-4">{member.role}</p>

                            {/* Social Media Links */}
                            <div className="flex justify-center space-x-4">
                                {member.instagram && (
                                    <a
                                        href={member.Instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-500 hover:text-purple-500"
                                    >
                                        <FaInstagram className="h-6 w-6" />
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400"
                                    >
                                        <FaLinkedin className="h-6 w-6" />
                                    </a>
                                )}
                                {member.github && (
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-gray-100"
                                    >
                                        <FaGithub className="h-6 w-6" />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        <FaTwitter className="h-6 w-6" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
