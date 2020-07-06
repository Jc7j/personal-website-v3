import React from 'react';

import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import '../styles/IconLink.css';

type IconType = 'github' | 'linkedin' | 'resume' | 'email';

interface IconLinkProps {
  href: string;
  icon: IconType;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="iconLinkContainer"
    >
      {icon === 'github' && <FaGithub />}
      {icon === 'linkedin' && <FaLinkedin />}
      {icon === 'email' && <MdEmail />}
    </a>
  );
};

export default IconLink;
