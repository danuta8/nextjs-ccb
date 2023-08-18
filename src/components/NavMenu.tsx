import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './NavMenu.module.css'; // Import your CSS module

const NavMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMenuOpen, handleKeyPress]);

  return (
    <nav className={styles.navMenu}>
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        ref={menuButtonRef}
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
      >
        Menu
      </button>
      <ul
        className={`${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}
        role="menu"
        aria-label="Main Menu"
      >
        <li role="menuitem">
          <Link href="/">Home</Link>
        </li>
        <li role="menuitem">
          <Link href="/about">About</Link>
        </li>
        <li role="menuitem">
          <Link href="/services">Services</Link>
        </li>
        <li role="menuitem">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
