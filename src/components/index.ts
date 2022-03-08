import {ProductCard as ProductCardHOC}  from './ProductCard';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductButtons from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export {default as ProductButtons  } from './ProductButtons';
export {default as ProductImage  } from './ProductImage';
export {default as ProductTitle  } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});

export default ProductCard;