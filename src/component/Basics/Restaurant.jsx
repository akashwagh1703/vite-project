// import React from 'react'
import { useState } from 'react';
import './style.css'
import Menu from "./menuApi";
import Navbar from './Navbar';
import MenuCard from './MenuCard';

const categoryList = [
  ...new Set(Menu.map((curElem) => {
    return curElem.category;
  })
  ),"All"
];

// console.log(categoryList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(categoryList);
  const filterItem = (category) => {
    if(category === 'All'){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} categoryList={categoryList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant;
