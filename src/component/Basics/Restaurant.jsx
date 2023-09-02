// import React from 'react'
import { useState } from 'react';
import './style.css'
import Menu from "./menuApi";
import MenuCard from './MenuCard';

const Restaurant = () => {

  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
      <MenuCard />
    </>
  )
}

export default Restaurant;
