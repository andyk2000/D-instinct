import React, { useEffect, useState } from 'react';
import "./Articles.css";
import DataTable from 'react-data-table-component';
import Sidebar from './Dashboard/Sidebar';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserManagement() {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState(null);
    const navigate = useNavigate;

    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then(res => {
                setData(res.data);
                setRecords(res.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleDelete = (userId) => {
        
    };

    const columns = [
        {
            name: "Username",
            selector: row => row.username,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Account Type",
            selector: row => row.accountType
        },
        {
            name: "Plan",
            selector: row => row.plan,
            sortable: true
        },
        {
            name: "Delete",
            cell: row => (
                <div>
                    <button onClick={() => handleDeleteUser(row.id)} className='delete-button'>Delete</button>
                </div>
            ),
            button: true
        }
    ];

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.username.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    }

    function handleDeleteUser(id) {
        const conf = window.confirm("Do want to permanently banish this member");
        if(conf) {
            axios.delete("http://localhost:8080/"+id)
            .then(res => {
                alert('record has deleted');
                navigate('/Admin-dashboard/Users')
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='main'>
                <div className='nav-bar'>
                    <input type='text' placeholder='SEARCH' className='search-bar' onChange={handleFilter} />
                    <SearchIcon className='search-btn' />
                </div>
                <div className='table-container'>
                    {records && <DataTable
                        className='table'
                        columns={columns}
                        data={records}
                        selectableRows
                        fixedHeader
                        pagination
                    />}
                </div>
            </div>
        </div>
    );
}

export default UserManagement;
