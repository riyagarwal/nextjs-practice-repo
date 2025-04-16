import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
      {/* Since AddToCart is a client component, the entire jsx of ProductCard will be rendered on the server side
      but there will be a hole for AddToCart which will be filled on the client side */}
    </div>
  );
};

export default ProductCard;
