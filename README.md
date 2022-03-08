# CB-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Carlos Betancourt

## Ejemplo
```
import {
    ProductImage,
    ProductTitle,
    ProductButtons
} from 'cb-product-card';
```

```
<ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
    {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>
```