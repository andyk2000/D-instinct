import React, { useState } from 'react';
import ReactQuill from 'react-quill';
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

  return (
    <div className='New Article'>

        <div className='row'>
            <div className='editor'>
                <ReactQuill 
                    theme='snow' 
                    value={value} 
                    onChange={setValue} 
                    className='editor-input'
                    modules={modules}
                    />
            </div>
            <div className='preview' dangerouslySetInnerHTML={{ __html: value}}/>
        </div>

    </div>
  )
}

export default NewArticle;