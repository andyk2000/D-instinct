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

  return (
    <div className='New-Article'>
        <div className='nav-bar'>
            <ArrowBackIcon className='nav-back'/>
            <p className='title'>New Article</p>
        </div>
        <div className='row'>
            <div className='picture-sec'>
                <input 
                    type='file' 
                    id='picture' 
                    name='picture' 
                    onChange={handlePictureChange} 
                    accept='image/*'
                />
            </div>
            <div className='editor'>
                <ReactQuill 
                    theme='snow' 
                    value={value} 
                    onChange={setValue} 
                    className='editor-input'
                    modules={modules}
                    />
            </div>
        </div>

    </div>
  )
}

export default NewArticle;