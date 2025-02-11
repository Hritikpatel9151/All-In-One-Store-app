import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../Redux/features/SearchSlice';

const SearchBar = () => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-2 relative col-span-1">
      <input
        type="text"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        value={search}
        placeholder="Search..."
        className="px-2 py-1 rounded-md w-[500px]"
      />
    </div>
  );
};

export default SearchBar;
