/** @format */

import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";
// import { PhoneIphone } from "@material-ui/icons";

// const products = [
//   {
//     id: 1,
//     name: "Iphone",
//     descriptions: "Mobile Phone.",
//     price: "49000",
//     image:
//       "https://specials-images.forbesimg.com/imageserve/5f51764d1e91a64567505ad9/960x0.jpg?fit=scale"
//   },
//   {
//     id: 2,
//     name: "macbook pro",
//     descriptions: "Laptops.",
//     price: "249000",
//     image:
//       "https://cdn.arstechnica.net/wp-content/uploads/2021/01/2019-16-inch-MacBook-Pro-closed-1440x823.jpg"
//   }
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  // if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
