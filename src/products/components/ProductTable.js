import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export const defaultColumns = [
  { label: "Name" },
  { label: "Price" }
]

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  const productColumns = defaultColumns.map((column) =>
    <th>{column.label}</th>
  )

  return (
    <table class="product-table">
      <thead>
        <tr>{productColumns}</tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;