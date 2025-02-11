import { useState, useEffect, useCallback } from "react";
import products from '../MokeData/products'
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(products);
  const [filterproduct,setFiterproduct]=useState(products);
  // const handleSearch = useCallback(
  //   debounce()
  // )
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for products..."
        className="w-full p-2 border rounded-md"
      />
      <ul className="mt-4">
        {filterproduct.length > 0 ? (
          filterproduct.map((product) => (
            <li key={product.id} className="p-2 border-b">
              {product.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No products found</p>
        )}
      </ul>
    </div>
  )
}

export default SearchBar
