// import React from 'react'

const MenuCard = ({ menuData }) => {
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem) => {
      const {id, category, name, description, image} = curElem;
      return(
        <>
          <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title subtle">{name}</h2>
                <span className="card-description subtle">{description}</span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} alt="image" className="card-media" />
            </div>
          </div>
        </>
      );
    })};
    </section>
    </>
  )
}

export default MenuCard;
