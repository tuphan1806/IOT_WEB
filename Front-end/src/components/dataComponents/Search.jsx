import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import icon search từ react-icons
import '../../styles/SearchAndSort.css'; // Import CSS

function Search({ setSearchTerm, searchResult, setSearchColumn, tableName }) {
  // Khởi tạo state cho input text
  const [inputText, setInputText] = useState('');

  // Hàm xử lý sự kiện khi nhấn nút tìm kiếm
  const handleSearch = () => {
    setSearchTerm(inputText);
  };

  // Hàm xử lý sự kiện khi thay đổi nội dung input text
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Hàm xử lý sự kiện khi chọn loại tìm kiếm
  const handleTypeSearch = (e) => {
    setSearchColumn(e.target.value);
  };

  // Render component Search tùy thuộc vào tableName
  return tableName === 'get_sensor_data' ? (
    <div className="search-container">
      <input
        type="text"
        id="search"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Search"
      />
      <select className="searchColumn" onChange={handleTypeSearch}>
        <option selected value="all">
          All
        </option>
        <option value="id">ID</option>
        <option value="temperature">Temperature</option>
        <option value="humidity">Humidity</option>
        <option value="brightness">Brightness</option>
        <option value="time">Time</option>
      </select>
      <button onClick={handleSearch} className="searchBtn">
        <FaSearch />
      </button>
      {/* Hiển thị thông báo khi không có kết quả hoặc khi đang tải dữ liệu */}
      {searchResult === 'noResults' && (
        <p className="no-results-message">No result</p>
      )}
      {searchResult === 'loading' && (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  ) : (
    <div className="search-container">
      <input
        type="text"
        id="search"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Search"
      />
      <select className="searchColumn" onChange={handleTypeSearch}>
        <option selected value="all">
          All
        </option>
        <option value="id">ID</option>
        <option value="device">Device</option>
        <option value="action">Action</option>
        <option value="time">Time</option>
      </select>
      <button onClick={handleSearch} className="searchBtn">
        <FaSearch />
      </button>
      {/* Hiển thị thông báo khi không có kết quả hoặc khi đang tải dữ liệu */}
      {searchResult === 'noResults' && (
        <p className="no-results-message">No result.</p>
      )}
      {searchResult === 'loading' && (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
}

export default Search;
