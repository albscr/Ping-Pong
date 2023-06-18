import React, { useState } from 'react';
import './button.css';

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    const currentTarget = e.currentTarget;
  
    setIsAnimating(true);
    currentTarget.classList.add('animate');
    setTimeout(() => {
      setIsAnimating(false);
      currentTarget.classList.remove('animate');
    }, 750);
  
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`bubbly-button text-base hover:bg-electric-blue hover:text-white border border-electric-blue text-electric-blue p-2 px-3 rounded-lg transition ease-in ${
        isAnimating ? 'animate' : ''
      }`}
      onClick={handleClick}
    >
      Add win!
    </button>
  );
};

export default Button;
