import React, { useState } from 'react';
import "./Articles.css";
import DataTable from 'react-data-table-component';
import Sidebar from './Dashboard/Sidebar';
import SearchIcon from '@mui/icons-material/Search';

function UserManagement() {

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: "Author",
            selector: row => row.author,
            sortable: true
        },
        {
            name: "Date",
            selector: row => row.date
        },
        {
            name: "views",
            selector: row => row.views,
            sortable: true
        },
        {
            name: "Likes",
            selector: row => row.likes,
            sortable: true
        },
        {
            name: "Comments",
            selector: row => row.comments,
            sortable: true
        },
    ]

    const data = [
        {
            id: 1,
            title: "Life and death",
            author: "diane uwamariya",
            date: "05-05-2024",
            views: 56,
            likes: 7,
            comments: 4,
        },
        {
            id: 2,
            title: "from homelessness to stardom",
            author: "diane uwamariya",
            date: "07-05-2024",
            views: 106,
            likes: 18,
            comments: 34,
        },
        {
            id: 3,
            title: "women sports, why is it still not as popular as male",
            author: "diane uwamariya",
            date: "03-05-2024",
            views: 32,
            likes: 6,
            comments: 0,
        },
        {
            id: 4,
            title: "The benefits of morning yoga",
            author: "diane uwamariya",
            date: "05-05-2024",
            views: 60,
            likes: 23,
            comments: 0,
        },
        {
            id: 5,
            title: "Witnessing sexual abuse at work, powerlessness",
            author: "diane uwamariya",
            date: "01-05-2024",
            views: 95,
            likes: 3,
            comments: 50,
        },
    ]

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
        <div>New Article</div>
        <div className='table-container'>
            <DataTable
                columns={columns}
                data={records}
                selectableRows
                fixedHeader
                pagination
            />
        </div>
      </div>
    </div>
  )
}

export default UserManagement;