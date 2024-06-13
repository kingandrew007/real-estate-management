import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Explore.css';

function Explore() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ location: '', price: '', type: '' });
  const propertiesPerPage = 6;

  useEffect(() => {
    axios.get('http://localhost:8000/explores')
      .then(users => setUsers(users.data))
      .catch(err => console.log("fetching data error"));
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    axios.get('http://localhost:8000/explores')
      .then(response => {
        let filteredUsers = response.data;
        if (filters.location) {
          filteredUsers = filteredUsers.filter(user => user.place.toLowerCase().includes(filters.location.toLowerCase()));
        }
        if (filters.price) {
          filteredUsers = filteredUsers.filter(user => parseFloat(user.price) <= parseFloat(filters.price));
        }
        if (filters.type) {
          filteredUsers = filteredUsers.filter(user => user.type.toLowerCase().includes(filters.type.toLowerCase()));
        }
        setUsers(filteredUsers);
        setCurrentPage(1);
      })
      .catch(err => console.log("fetching data error"));
  };

  const resetFilters = () => {
    setFilters({ location: '', price: '', type: '' });
    axios.get('http://localhost:8000/explores')
      .then(users => setUsers(users.data))
      .catch(err => console.log("fetching data error"));
  };

  const lastIndex = currentPage * propertiesPerPage;
  const firstIndex = lastIndex - propertiesPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npages = Math.ceil(users.length / propertiesPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCpage = (n) => {
    setCurrentPage(n);
  };

  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="container-explore ">
        <div className="filter-container row">
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Filter by location"
            className="filter-input col-3"
          />
          <input
            type="number"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            placeholder="Filter by max price"
            className="filter-input col-2"
          />
          <input
            type="text"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            placeholder="Filter by type"
            className="filter-input col-3"
          />
          <button onClick={applyFilters} className="filter-btn col-2">Apply Filters</button>
          <button onClick={resetFilters} className="filter-btn col-2 ">Reset Filters</button>
        </div>

        <div className="row">
          <h1 className='heading-tag'>Properties</h1>
          {records.map(rec => (
            <div className="col-6 mt-4" key={rec.id}>
              <div className="card-explore">
                <img src={rec.image} className="cards-here" alt={rec.name} />
                <div className="card-body-explore row">
                  <div className="col-7">
                    <h5 className="card-title-explore">{rec.name}</h5>
                    <div className="mt-3">{rec.type}</div>
                    <div>{rec.place}</div>
                  </div>
                  <div className='col-5'>
                    <h5 className='text-end m-0'>{rec.price}</h5>
                    <p className='text-end m-0'>price</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" onClick={prePage} to="#">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <Link to="#" className='page-link' onClick={() => changeCpage(n)}>
                  {n}
                </Link>
              </li>
            ))}
            <li className="page-item">
              <Link className="page-link" onClick={nextPage} to="#">
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Explore;
