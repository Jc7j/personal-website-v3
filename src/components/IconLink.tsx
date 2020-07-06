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
      className="iconLinkContainer"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon === 'email' && <MdEmail />}
      {icon === 'github' && <FaGithub />}
      {icon === 'linkedin' && <FaLinkedin />}
    </a>
  );
};

export default IconLink;
