import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import "react-quill/dist/quill.snow.css";
import "./NewArticle.css";
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

function NewArticle() {
    const [inputData, setInputData] = useState({title:'', category:'body', language:'francais', summary:'', content:'', published:'', promote:'', coverLink:''})
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);

    const loadAuthors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/authors');
            const filteredAuthors = response.data.filter(author => author.acountType === 'writer' || author.acountType === 'admin');
            setAuthors(filteredAuthors);
        } catch (error) {
            console.error('Error loading authors:', error);
        }
    }

    useEffect((
        ()=>{loadAuthors();}
    ),[])

    function handlePreview(event) {
        event.preventDefault()

        axios.post('http://localhost:8080/article', inputData)
        .then(res => {
            alert("Article saved sucessfully!");
            navigate('/Admin-dashboard/Articles');
        }).catch(err => console.log(err));
    }

    function publishChange() {
        setInputData({...inputData, published:'true'})
    }

    function handlePublish(event) {
        event.preventDefault()

        axios.post('http://localhost:8080/article', inputData)
        .then(res => {
            alert("Article published sucessfully!");
            navigate('/Admin-dashboard/Articles');
        }).catch(err => console.log(err));
    }

  return (
    <div className='New-Article'>
        <div className='article-form'>
            <div className='info-sec'>
            <div className='title-sec'>
                    <p className='title-label'>Image URL</p>
                    <input className='title-input' placeholder='TITLE OF THE STORY' onChange={e=> setInputData({...inputData, coverLink: e.target.value})}/>
                </div>
                <div className='title-sec'>
                    <p className='title-label'>Title</p>
                    <input className='title-input' placeholder='TITLE OF THE STORY' onChange={e=> setInputData({...inputData, title: e.target.value})}/>
                </div>
                <div className="category-sec">
                    <p className='category-label'>Author</p>
                    <select id="category" 
                        className='category-input'
                        defaultValue="Diane UWAMARIYA" 
                        onChange={e=> setInputData({...inputData, category: e.target.value})}>
                        {authors.map(author => (
                            <option key={author.userID} value={author.fullName}>{author.fullName}</option>
                            ))}
                    </select>
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
                <div className='language-sec'>
                    <p className='language-label'>Publish</p>
                    <select 
                        id="publish" 
                        className='language-input'
                        defaultValue="unpublish"
                        onChange={e=> setInputData({...inputData, published: e.target.value})}>
                        <option value="unpublished">unpublish</option>
                        <option value="unpublished">publish</option>
                    </select>
                </div>
                <div className='buttons-sec'>
                    <button className='delete-btn'>DELETE</button>
                    <button className='draft-btn' onClick={handlePreview}>DRAFT</button>
                    <button className='preview-btn' onClick={handlePreview}>PREVIEW</button>
                    <button className='publish-btn' onClick={handlePublish}>PUBLISH</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NewArticle;