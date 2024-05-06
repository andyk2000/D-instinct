import React from 'react';
import coverImage from '../images/cover image1.webp';
import './Featured.css';
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <div className='featured'>
        <div className='image-container'>
            <img alt='' src='' className='image'/>
        </div>
        <div className='featured-info'>
            <p className='featured-title'>Fertility plan, what are the option?</p>
            <p className='featured-author'>Diane UWAMARIYA</p>
            <p className='featured-summary'>For women facing challenges with conception, there are various fertility options available. This article explores these options, ranging from treatments that address ovulation issues to assisted reproductive technologies (ART) like in vitro fertilization (IVF). It highlights the importance of consulting a healthcare professional to determine the most suitable course of treatment based on individual needs and circumstances. The article also emphasizes the emotional journey of fertility and offers resources for support.</p>
            <button className='featured-button'>READ MORE</button>
        </div>
    </div>
  )
}

export default Featured