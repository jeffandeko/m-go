import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button className="" onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">Mathai go</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories </h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          X
        </button>
        <ul>
          <li>
            <a href="index.html">Vegetables</a>
          </li>
          <li>
            <a href="index.html">Alcoholic Drinks</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="product"/>
                <div className="product-name">
                  <a href="product.html">Fresh Tomatoes</a>
                </div>
                <div className="product-brand">money marker</div>
                <div className="product-price">Ksh 25 </div>
                <div className="product-rating">3.5 stars (15 reviews) </div>
              </div>
            </li>

          </ul>
        </div>
      </main>
      <footer className="footer">all rights reserved @jeff andeko</footer>
    </div>
  );
}

export default App;
