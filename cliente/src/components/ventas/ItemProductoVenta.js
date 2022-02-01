import React from "react";

const ItenProductoVenta = () => {
  return (
    <div className="tr_item">
      <div className="td_item item_img">
        <img
          src="https://image.freepik.com/free-photo/fresh-bread_155003-937.jpg"
          alt=""
        />
      </div>
      <div className="td_item item_name">
        <label className="main">Pan molde</label>
      </div>
      <div className="td_item item_color">
        <label>1.75</label>
      </div>
      <div className="td_item item_qty cantidad">
        <span class="pqt-minus">-</span>
        <button class="cart-button">
          <span class="add-to-cart">2</span>
          <span class="added"></span>
          <i class="fa fa-shopping-cart"></i>
        </button>
        <span class="pqt-plus">+</span>
      </div>
      <div className="td_item item_price">
        <label>$ 3.50</label>
      </div>
      <div className="td_item item_remove">
        <span className="material-icons-outlined">close</span>
      </div>
    </div>
  );
};

export default ItenProductoVenta;
