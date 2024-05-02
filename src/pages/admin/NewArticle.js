import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "react-quill/dist/quill.snow.css";
import "./NewArticle.css";

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
    const [value, setValue] = useState("");

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handlePictureChange = (e) => {
        const picture = e.target.files[0];
        setFormData({ ...formData, picture });
    };

    const [formData, setFormData] = useState({
        picture: null,
        title: '',
        content: ''
    });
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

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
                        onChange={handlePictureChange} 
                        accept='image/*'
                        className='picture'
                    />
                </div>
            </div>
            <div className='info-sec'>
                <div className='title-sec'>
                    <p className='title-label'>Title</p>
                    <input className='title-input' placeholder='TITLE OF THE STORY'/>
                </div>
                <div className="category-sec">
                    <p className='category-label'>Category</p>
                    <select id="category" className='category-input' value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="Body">Body</option>
                        <option value="Spirit">Spirit</option>
                        <option value="Soul">Soul</option>
                        <option value="Society">Society</option>
                    </select>
                </div>
                <div className='language-sec'>
                    <p className='language-label'>Language</p>
                    <select id="category" className='language-input' value={selectedLanguage} onChange={handleLanguageChange}>
                        <option value="Body">Francais</option>
                        <option value="Spirit">English</option>
                    </select>
                </div>
                <div className='description-sec'>
                    <p className='description-label'>Description</p>
                    <textarea className='description-input'/>
                </div>
                <div className='content-sec'>
                    <p className='content-label'>Content</p>
                    <ReactQuill 
                        theme='snow' 
                        value={value} 
                        onChange={setValue} 
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
                    <button className='preview-btn'>PREVIEW</button>
                    <button className='publish-btn'>PUBLISH</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NewArticle;