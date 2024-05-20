import React from 'react';
import '../../styles/SearchAndSort.css'; // Import CSS

const Sort = ({
  sortOption,
  setSortOption,
  sortOrder,
  setSortOrder,
  sortableColumns,
}) => {
  // Hàm xử lý sự kiện khi thay đổi cách sắp xếp
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Hàm xử lý sự kiện khi thay đổi thứ tự sắp xếp
  const handleOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Render component Sort
  return (
    <div>
      {/* Chọn cách sắp xếp */}
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortOption} onChange={handleSortChange}>
        {/* Render danh sách các cột có thể sắp xếp */}
        {sortableColumns.map((column) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </select>

      {/* Chọn thứ tự sắp xếp */}
      <label htmlFor="order">Sort order: </label>
      <select id="order" value={sortOrder} onChange={handleOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
