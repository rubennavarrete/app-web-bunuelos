import React from "react";

const Plantilla = () => {
  return (
    <main>
      <section class="onecolumn">
        <h3>
          <a href="shopping-cart.php">Shopping Cart</a> &#x276F; Your Order
          &#x276F;
        </h3>

        <h2 style="margin:2rem 0 1rem; text-align:center;">
          <span class="pinkheart">&hearts; </span>ORDER CHECKOUT
        </h2>
        <p>
          Hi Sarah, we've received the order # 234 and we're working on it now.
          We'll email you an update as soon as we have shipped it. Meanwhile,
          you can review your order details below.
        </p>

        <h4>Order &amp; Shipping</h4>

        <table id="checkoutSummary">
          <tbody>
            <tr>
              <th>Order Number</th>
              <td># 01</td>
            </tr>
            <tr>
              <th>Client Name:</th>
              <td>Sarah Gomez</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>sarahvgomez@gmail.com</td>
            </tr>
          </tbody>
        </table>

        <h4>Items Ordered</h4>

        <table id="checkoutItems">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

          <tr>
            <td>
              <h3>
                <span class="pinkheart">&hearts;</span> Happy Birthday Stickers
              </h3>
            </td>
            <td>1</td>
            <td>$ 3.88</td>
          </tr>

          <tr id="finalSum">
            <td colspan="2" style="border:0; text-align:right;">
              SubTotal
            </td>
            <td>$ 3.88</td>
          </tr>

          <tr>
            <td colspan="2" style="border:0; text-align:right;">
              Shipping
            </td>
            <td>$ 3.88</td>
          </tr>

          <tr>
            <td colspan="2" style="border:0; text-align:right;">
              Estimated Sales Tax
            </td>
            <td>$ 3.88</td>
          </tr>

          <tr>
            <td colspan="2" style="border:0; text-align:right;">
              Total
            </td>
            <td style="background: #eee;">$ 3.88</td>
          </tr>
        </table>

        <h4>Need Help?</h4>
        <p>
          {" "}
          If there is anything you would like to fix on this order, feel free to
          look at our <a href="contact.php">FAQ</a>. If you need to reach out to
          us then you can fill out our <a href="contact.php">contact form</a> or
          call us at.
        </p>
      </section>
    </main>
  );
};

export default Plantilla;
