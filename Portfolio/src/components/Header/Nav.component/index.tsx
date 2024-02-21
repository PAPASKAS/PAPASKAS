import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.scss';


function Index() {
  return (
    <nav className={ css.nav }>
      <ul className={ css.nav__list }>
        <li className={ css.nav__list_item }><Link to="/" className={ css.nav__list_item_link }><span className={ css.sign }>#</span>home</Link></li>
        <li className={ css.nav__list_item }><Link to="/works" className={ css.nav__list_item_link }><span className={ css.sign }>#</span>works</Link></li>
        <li className={ css.nav__list_item }><Link to="/about-me" className={ css.nav__list_item_link }><span className={ css.sign }>#</span>about-me</Link></li>
        <li className={ css.nav__list_item }><Link to="/contacts" className={ css.nav__list_item_link }><span className={ css.sign }>#</span>contacts</Link></li>
      </ul>
    </nav>
  );
}

export default Index;