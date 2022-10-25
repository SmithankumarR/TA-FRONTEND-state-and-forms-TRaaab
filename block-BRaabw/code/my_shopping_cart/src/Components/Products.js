import React from "react";
import Products from "../data.json";
import { Card, Button } from "react-bootstrap";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="container">
        <h2> {Products.length} Product(s) found </h2>
        let product-images =
        {Products.map((product) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./static/products/" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <hr className="hr" />
              <Card.Text>'$' {product.price}</Card.Text>
              <Button className="btn">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </section>
    );
  }
}

export default Product;
