// import React from 'react'
import Menu from "./menuApi";

const MenuCard = () => {

  // console.log(Menu);

  return (
    <>
      <div className="card-container">
      {Menu.map(data => (
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{data.id}</span>
            <span className="card-author subtle">{data.category}</span>
            <h2 className="card-title subtle">{data.name}</h2>
            <span className="card-description subtle">{data.description}</span>
            <div className="card-read">Read</div>
          </div>
          <img src={data.image} alt="image" className="card-media" />
          <span className="card-tag subtle">Order Now</span>
        </div>
        ))};
      </div>
    </>
  )
}

export default MenuCard;
