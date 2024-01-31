/**
 * Component import
 */
import ProductItem from './ProductItem';
/**
 * Css import
 */
import classes from './Products.module.css';

/* CONSTANT */
const products = [
  { id: 'p1', title: 'Product 1', prix : 9, description: 'This is a first product - amazing!' },
  { id: 'p2', title: 'Product 2', prix : 11, description: 'This is a second product - amazing!' },
  { id: 'p3', title: 'Product 3', prix : 28, description: 'This is a third product - amazing!' },
  { id: 'p4', title: 'Product 4', prix : 30, description: 'This is a fourth product - amazing!' },
  { id: 'p5', title: 'Product 5', prix : 26, description: 'This is a fifth product - amazing!' },
];


/**
 * Render the products section.
 *
 * @param {object} props - the properties for rendering the products section
 * @return {JSX.Element} the products section component
 */
const Products = (props) => {
  /* RENDER */
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          products.map((product) => (
            <ProductItem
              key={product.id}
              item={{
                id: product.id,
                title: product.title,
                price: product.prix,
                description: product.description
              }}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
