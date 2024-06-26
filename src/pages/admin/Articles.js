import React, { useEffect, useState } from 'react';
import "./Articles.css";
import DataTable from 'react-data-table-component';
import Sidebar from './Dashboard/Sidebar';
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

    const handleDeleteArticle = async (articleId) => {
        const conf = window.confirm("Do want to permanently delete this article?");

        if(conf){
            await axios.delete(`http://localhost:8080/article-delete/${articleId}`);
            alert("the article has been deleted");
        }
    };

    const handleUpdateArticle = (articleId) => {
        navigate(`/Admin-dashboard/Articles-Update/${articleId}`);
    }

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
            name: "Publication",
            selector: row => row.published,
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
                    <p className='id'>{row.ArticleId}</p>
                    <button onClick={() => handleUpdateArticle(row.articleID)} className='update-container'><ModeEditOutlineTwoToneIcon className='update'/></button>
                    <button onClick={() => handleDeleteArticle(row.articleID)} className='delete-container'><DeleteOutlineTwoToneIcon className='delete'/></button>
                </div>
            ),
            button: true
        }
    ];

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='main'>
                <div className='search-container'>
                    <input type='text' placeholder='SEARCH' className='search-bar' onChange={handleFilter} />
                </div>
                <div className='new-article-btn'><Link to="/new-article" className='new-article'>New Article</Link></div>
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
