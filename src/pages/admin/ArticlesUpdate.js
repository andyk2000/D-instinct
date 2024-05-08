import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import "react-quill/dist/quill.snow.css";
import "./ArticlesUpdate.css";
import { useNavigate } from 'react-router-dom';

const modules = {
    toolbar: [
        [{header: [1,2,3,4,5,6, false] }],
        [{ font: [] }],
        [{ size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            {list: "ordered"},
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"},
        ],
        ["link"],
    ],   
};

function ArticlesUpdate() {
    const [inputData, setInputData] = useState({title:'', category:'', language:'', summary:'', content:''})
    const navigat = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:8080/article', inputData)
        .then(res => {
            alert("Article saved sucessfully!");
            navigat('/Admin-dashboard/Articles');
        }).catch(err => console.log(err));
    }

  return (
    <div className='New-Article'>
        <div className='nav-bar'>
            <ArrowBackIcon className='nav-back'/>
            <p className='page-header'>New Article</p>
        </div>
        <div className='article-form'>
            <div className='picture-sec'>
                <div className='picture-frame'>
                    <input 
                        type='file' 
                        id='picture' 
                        name='picture' 
                        accept='image/*'
                        className='picture'
                    />
                </div>
            </div>
            <div className='info-sec'>
                <div className='title-sec'>
                    <p className='title-label'>Title</p>
                    <input className='title-input' placeholder='TITLE OF THE STORY' onChange={e=> setInputData({...inputData, title: e.target.value})}/>
                </div>
                <div className="category-sec">
                    <p className='category-label'>Category</p>
                    <select id="category" 
                        className='category-input'
                        defaultValue="body" 
                        onChange={e=> setInputData({...inputData, category: e.target.value})}>
                        <option value="body">Body</option>
                        <option value="spirit">Spirit</option>
                        <option value="soul">Soul</option>
                        <option value="society">Society</option>
                    </select>
                </div>
                <div className='language-sec'>
                    <p className='language-label'>Language</p>
                    <select 
                        id="category" 
                        className='language-input'
                        defaultValue="francais" 
                        onChange={e=> setInputData({...inputData, language: e.target.value})}>
                        <option value="francais">Francais</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <div className='description-sec'>
                    <p className='description-label'>Summary</p>
                    <textarea className='description-input' onChange={e=> setInputData({...inputData, summary: e.target.value})}/>
                </div>
                <div className='content-sec'>
                    <p className='content-label'>Content</p>
                    <ReactQuill 
                        theme='snow' 
                        value={inputData.content}
                        onChange={(content) => setInputData({...inputData, content: content})} 
                        className='content-input'
                        modules={modules}
                    />
                </div>
                <div className='keywords-section'>
                    <p className='keywords'>#Keyword</p>
                </div>
                <div className='buttons-sec'>
                    <button className='delete-btn'>DELETE</button>
                    <button className='draft-btn'>DRAFT</button>
                    <button className='preview-btn' onClick={handleSubmit}>PREVIEW</button>
                    <button className='publish-btn' >PUBLISH</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ArticlesUpdate;