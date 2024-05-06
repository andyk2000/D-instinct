import React, { useEffect, useState } from 'react';
import "./Articles.css";
import DataTable from 'react-data-table-component';
import Sidebar from './Dashboard/Sidebar';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Articles() {

    const [columns, setColumns] = useState([]);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/articles')
        .then(
            res => {
                setColumns(Object.keys(res.data[0]))
                setData(res.data)
            }
        )
    },[])

    const [records, setRecords] = useState(data);

    function handlefilter(event){
        const newData = data.filter(row => {
            return row.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData);
    }

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='main'>
        <div className='nav-bar'>
          <input type='text' placeholder='SEARCH' className='search-bar' onChange={handlefilter} />
          <SearchIcon className='search-btn' />
        </div>
        <div className='new-article-btn'><Link to="/New-Article">New Article</Link></div>
        <div className='table-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i) => (
                            <tr key = {i}>
                                <td>{d.title}</td>
                                <td>{d.authorName}</td>
                                <td>{d.category}</td>
                                <td>{d.views}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Articles