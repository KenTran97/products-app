import { products } from '../mockup/data.js';
import FilterableProductTable from './components/FilterableProductTable.js';

const List = () => {
    return <FilterableProductTable products={products} />;
}

export default List;
