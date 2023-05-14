import React from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { Logo } from '../Components/Logo/Logo';
import { HeaderMenu } from '../Components/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderMenu />
    </header>
  );
}
