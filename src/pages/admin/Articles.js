import React, { useEffect, useState } from 'react';
import "./Articles.css";
import DataTable from 'react-data-table-component';
import Sidebar from './Dashboard/Sidebar';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

function Articles() {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
    const navigate = useNavigate(); // Corrected invocation of useNavigate

    useEffect(() => {
        axios.get('http://localhost:8080/articles')
            .then(res => {
                setData(res.data);
                setRecords(res.data);
            })
            .catch(error => {
                console.error('Error fetching article data:', error);
            });
    }, []);

    const handleDeleteArticle = (articleId) => {
        
    };

    const handleFilter = (event) => {
        const newData = data.filter(row => {
            return row.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    };

    const columns = [
        {
            name: "Article Title",
            selector: row => row.title,
            sortable: true
        },
        {
            name: "Author",
            selector: row => row.authorName,
            sortable: true
        },
        {
            name: "Category",
            selector: row => row.category,
            sortable: true
        },
        {
            name: "Views",
            selector: row => row.views,
            sortable: true
        },
        {
            name: "Actions",
            cell: row => (
                <div className='button-container'>
                    <button onClick={() => {}} className='update-container'><ModeEditOutlineTwoToneIcon className='update'/></button>
                    <button onClick={() => handleDeleteArticle(row.articleId)} className='delete-container'><DeleteOutlineTwoToneIcon className='delete'/></button>
                </div>
            ),
            button: true
        }
    ];

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='main'>
                <div className='nav-bar'>
                    <input type='text' placeholder='SEARCH' className='search-bar' onChange={handleFilter} />
                    <SearchIcon className='search-btn' />
                </div>
                <div className='new-article-btn'><Link to="/new-article">New Article</Link></div>
                <div className='table-container'>
                    <DataTable
                        className='table'
                        columns={columns}
                        data={records}
                        selectableRows
                        fixedHeader
                        pagination
                    />
                </div>
            </div>
        </div>
    );
}

export default Articles;
