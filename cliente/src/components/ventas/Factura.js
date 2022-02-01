import React from "react";

import logo from "../../assets/Logo.svg";

const Factura = () => {
  return (
    <div className="paypal">
      <div className="paypal__header">
        <div className="paypal__logo-wrapper">
          <img src={logo} alt="Paypal" className="paypal__logo" />
        </div>

        <div className="paypal__header-info">
          <span className="paypal__date">25.04.2016</span>
          <span className="paypal__ref">0f-113</span>
        </div>
      </div>

      <div className="paypal__subheader-wrapper">
        <div className="paypal__subheader">
          <h1 className="paypal__username">VladysLav, Hi</h1>
          <span className="paypal__help-text">
            Has comprado tres (3) artículos en nuestra tienda:
          </span>
        </div>
      </div>

      <div className="paypal__cart">
        <h2 className="paypal__cart-title">Cart:</h2>

        <ul className="paypal__cart-list">
          <li className="paypal__cart-item">
            <span className="paypal__index">1</span>
            <span className="paypal__item-name">t-Shirt Lacoste</span>
            <span className="paypal__item-price">$48.00</span>
          </li>

          <li className="paypal__cart-item">
            <span className="paypal__index">2</span>
            <span className="paypal__item-name">Snickers Nike</span>
            <span className="paypal__item-price">$125.00</span>
          </li>

          <li className="paypal__cart-item">
            <span className="paypal__index">3</span>
            <span className="paypal__item-name">All Stars</span>
            <span className="paypal__item-price">$95.00</span>
          </li>

          <li className="paypal__cart-item">
            <div className="total-factura">
              <span className="paypal__cart-total">Subtotal:</span>
              <span className="paypal__item-price">$268.00</span>
            </div>
            <div className="total-factura">
              <span className="paypal__cart-total">Iva: 12%</span>
              <span className="paypal__item-price">$26.00</span>
            </div>
            <div className="total-factura">
              <span className="paypal__cart-total">Total:</span>
              <span className="paypal__item-price">$294.00</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="paypal__footer">
        <img
          src="https://i.ibb.co/c8CQvBq/barcode.png"
          alt="Paypal Barcode"
          className="paypal__barcode"
        />
      </div>
    </div>
  );
};

export default Factura;
