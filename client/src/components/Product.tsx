
import "./Product.scss";

const Product = () => {
  return <div className="product_wrapper">
    <h1>Product Input Form</h1>
    <form className="form-container">
      <label>Product Name:</label>
      <input type="text" id="product-name" name="product-name" />
      <br />
      <label>Product Price:</label>
      <input type="text" id="product-price" name="product-price" />
      <br />

      <label>Product Date:</label>
      <br />
      <label>Month:</label>
      <select id="month" name="month">
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      <label>Year:</label>
      <select id="year" name="year">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <br />
      <input type="submit" value="Submit" />
    </form>


    <h2>Previous Products</h2>
    <div className="product-list-container">
      <div className="product-item">
        <div className="product-date">01/01/2021</div>
        <div className="product-name">Product 1</div>
        <div className="product-price">$10.00</div>
        <div className="product-actions">
          <button className="update-button">Update</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
      <div className="product-item">
        <div className="product-date">01/02/2021</div>
        <div className="product-name">Product 2</div>
        <div className="product-price">$20.00</div>
        <div className="product-actions">
          <button className="update-button">Update</button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Product;
