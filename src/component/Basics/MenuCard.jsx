// import React from 'react'


const MenuCard = () => {

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title subtle">Maggi</h2>
            <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi iste, incidunt deserunt inventore reprehenderit? Esse nisi eaque ut, ratione hic similique atque, porro iste perspiciatis ducimus, officiis possimus in.</span>
            <div className="card-read">Read</div>
          </div>
          {/* <img src={image} alt="image" className="card-media" /> */}
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  )
}

export default MenuCard;
