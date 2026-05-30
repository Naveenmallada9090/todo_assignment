import { Search, X } from 'lucide-react';

const SearchBar = ({ search, onSearch, onClear }) => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        {search && (
          <button className="clear-search" onClick={onClear}>
            <X size={16} />
          </button>
        )}
        <Search className="search-icon" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;