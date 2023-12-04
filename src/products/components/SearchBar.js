const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) => {
  return (
    <form className="search-bar">
      <input 
        type="text"
        value={filterText}
        placeholder="Search..."
        className="search-input"
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      <label>
        <input 
          type="checkbox"
          checked={inStockOnly}
          className="search-checkbox"
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;