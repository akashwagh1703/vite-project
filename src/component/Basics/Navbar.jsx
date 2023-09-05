// import React from 'react'

const Navbar = ({filterItem,categoryList}) => {
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
            {
                categoryList.map((categoryName) => {
                    return (
                        <button className="btn-group__item" onClick={() => filterItem(categoryName)}>{categoryName}</button>
                    );
                })
            }


            {/* <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
            <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
            <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
            <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button> */}
            {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
