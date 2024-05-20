import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { parseISO, format } from 'date-fns';
import '../../styles/PaginationTable.css'; // Import CSS
import Search from './Search'; // Import component Search

const PaginationTable = ({ endpoint, headers }) => {
  // Khởi tạo các state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchResult, setSearchResult] = useState(null);
  const [searchColumn, setSearchColumn] = useState('id');
  const limit = 10; // Số lượng phần tử trên mỗi trang

  // Sử dụng useEffect để gọi fetchData khi các state thay đổi
  useEffect(() => {
    fetchData();
  }, [currentPage, searchTerm, sortOption, sortOrder, searchColumn]);

  // Hàm fetchData để lấy dữ liệu từ API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:4000/api/v1/${endpoint}`,
        {
          params: {
            page: currentPage,
            limit: limit,
            searchTerm: searchTerm,
            sort: sortOption,
            order: sortOrder,
            searchColumn: searchColumn,
          },
        }
      );

      if (response.data.length > 0) {
        setData(response.data);
        setSearchResult('data');
      } else {
        setData([]);
        setSearchResult('noResults');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Hàm handlePageChange để thay đổi trang
  const handlePageChange = async (newPage) => {
    if (newPage >= 1) {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/${endpoint}`,
          {
            params: {
              page: newPage,
              limit: limit,
              searchTerm: searchTerm,
              sort: sortOption,
              order: sortOrder,
              searchColumn: searchColumn,
            },
          }
        );

        if (response.data.length > 0) {
          setCurrentPage(newPage);
          setData(response.data);
        } else {
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Hàm handleSortChange để thay đổi tùy chọn sắp xếp
  const handleSortChange = (column) => {
    if (sortOption === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOption(column);
      setSortOrder('desc');
    }
  };

  // Hàm getSortIcon để lấy biểu tượng sắp xếp
  const getSortIcon = (column) => {
    if (sortOption === column) {
      return sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />;
    }
    return null;
  };

  // Render component
  return (
    <div>
      <Search
        setSearchTerm={setSearchTerm}
        searchResult={searchResult}
        setSearchColumn={setSearchColumn}
        tableName={endpoint}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="tableContainer">
            <div className="paginationButtons">
              <button onClick={() => handlePageChange(currentPage - 1)}>
                &#10094;
              </button>
              <span>Page {currentPage}</span>
              <button onClick={() => handlePageChange(currentPage + 1)}>
                &#10095;
              </button>
            </div>
            {searchResult === 'data' ? (
              <table className="myTable">
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th key={header} onClick={() => handleSortChange(header)}>
                        {header}
                        {header.toLowerCase() === 'id' ||
                        header.toLowerCase() === 'time' ||
                        header.toLowerCase() === 'temperature' ||
                        header.toLowerCase() === 'humidity' ||
                        header.toLowerCase() === 'brightness'
                          ? getSortIcon(header)
                          : null}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      {headers.map((header) => (
                        <td key={header}>
                          {header.toLowerCase() === 'time' ||
                          header.toLowerCase() === 'temperature' ||
                          header.toLowerCase() === 'humidity' ||
                          header.toLowerCase() === 'brightness'
                            ? `${item[header.toLowerCase()]} ${getUnit(
                                header.toLowerCase()
                              )}`
                            : item[header.toLowerCase()]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : searchResult === 'noResults' ? (
              <p>No data</p>
            ) : (
              <p>Error fetching data</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// Hàm getUnit để lấy đơn vị đo lường
const getUnit = (header) => {
  switch (header) {
    case 'temperature':
      return '°C';
    case 'humidity':
      return '%';
    case 'brightness':
      return 'lux';
    default:
      return '';
  }
};

export default PaginationTable;
