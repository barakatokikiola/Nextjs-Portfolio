import {  FolderOpenDot, Home, Info, Linkedin, Twitter, Github, NotebookText, User } from 'lucide-react';
import Link from 'next/link';

const getIcon = (icon) => {
  switch (icon) {
    case 'home': return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case 'github': return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case 'linkedin': return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case 'twitter': return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case 'contact': return <User className="w-full h-auto" strokeWidth={1.5} />;
    case 'about': return <Info className="w-full h-auto" strokeWidth={1.5} />;
    case 'projects': return <FolderOpenDot className="w-full h-auto" strokeWidth={1.5} />;
    case 'resume': return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default: return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, newTab, icon }) => {
  return (
    <div
      className="absolute cursor-pointer"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? '_blank' : '_self'}
        className="text-foreground rounded-full flex items-center justify-center custom-bg"
        aria-label={label}
        name={label}
      >
        <span className="relative w-14 h-14 
        animate-spin-slow-reverse group-hover:pause 
        hover:text-accent p-4">{getIcon(icon)}
        <span className='peer absolute bg-transparent w-full h-full top-0 left-0' />
        <span className='absolute hidden peer-hover:block px-2 
        py-1 mx-2 top-1/2 left-full -translate-y-1/2
        bg-background text-foreground shadow-lg 
        rounded-md text-sm whitespace-nowrap'>{label}</span>
        </span>
        
      </Link>
    </div>
  );
};

export default NavButton;
