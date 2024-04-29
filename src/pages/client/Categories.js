import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import { Category } from '@mui/icons-material';
import './Categories.css'

function Categories() {
    const [activeTab, setActiveTab] = useState('Body');

  return (
    <div className='categories-tab'>
        <div className='search-bar'>
            <input className='search-input' type='text' placeholder='  SEARCH...'/>
            <button className='search-icon'>
                <SearchIcon />
            </button>
        </div>
        <div className='category-nav'>
            <h3 className='category-ordinary'>BODY</h3>
            <h3 className='category-ordinary'>SPIRIT</h3>
            <h3 className='category-ordinary'>SOUL</h3>
            <h3 className='category-ordinary'>SOCIETY</h3>
        </div>
        <div className='articles'>
            {data.map((d) => {
                <div className='article' key={d.title}>
                    <img className='article-img' src={d.img}/>
                    <div className='article-info'>
                        <p className='article-date'>{d.date}</p>
                        <h2 className='article-title'>{d.title}</h2>
                        <p className='author'>{d.author}</p>
                        <p className='article-summary'>{d.summary}</p>
                        <button className='read-more'>READ MORE</button>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

const data = [
    {
        title: 'How Your Backyard Can Become a Research Lab',
        date: "11/01/2024",
        category: "Body",
        author: "Diane uwamariya",
        img: 'https://cloudfrontgharpediabucket.gharpedia.com/uploads/2020/04/Tips-to-Set-Up-Laboratory-at-Home-01-0502040015.jpg',
        summary: 'Imagine contributing to groundbreaking discoveries without leaving your porch! Citizen science projects are on the rise, allowing anyone to participate in real scientific research. This article explores the fascinating world of citizen science, highlighting projects you can join to study everything from backyard birds to distant galaxies. We`ll discuss the benefits of citizen science for both research and participants, and provide tips on getting started.'
    },
    {
        name: 'Decoding Drooping Leaves and Thirsty Blooms',
        date: "20/02/2024",
        category: "Body",
        author: "Diane uwamariya",
        img: 'https://www.thespruce.com/thmb/y3zreqqlPUXpAt1ZKzKdP4EPgsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/why-is-my-peace-lily-drooping-b79fe417c59f4a05952015b7d345e5de.jpg',
        summary: 'Houseplants add life and beauty to our homes, but sometimes they become finicky. This article delves into the secret language of houseplants, helping you decipher what your drooping leaves and thirsty blooms are trying to tell you. Learn about common signs of distress, like underwatering and lack of light, and discover tips for keeping your leafy companions happy and thriving.'
    },
    {
        name: 'Unleashing Epic Adventures Without Breaking the Bank',
        date: "03/01/2024",
        category: "Body",
        author: "Shema Jacy",
        img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/stock%2Fcustom%20stock%2F2022-11-custom-stock%2Fgames-0228-edit',
        summary: 'Board games are a fantastic way to connect with friends and family, but the cost of new releases can be daunting. This article explores the world of affordable board games, offering recommendations for budget-friendly options across various genres. We`ll also discuss strategies for maximizing your existing game collection and explore free online resources for printing and playing your own board games.'
    },
    {
        name: 'Why a Good Chuckle is the Best Medicine',
        date: "07/04/2024",
        category: "Body",
        author: "Diane uwamariya",
        img: 'https://as1.ftcdn.net/v2/jpg/05/57/89/30/1000_F_557893040_G93c2ZDPjmdiPaJdVsD0b3gtFnlmJHq3.jpg',
        summary: 'Laughter truly is the best medicine! This article examines the scientific evidence behind the healing power of humor. Learn how laughter boosts your immune system, reduces stress, and promotes a sense of well-being. We`ll explore different ways to incorporate more laughter into your life, from watching a funny movie to spending time with friends who make you giggle.'
    },
    {
        name: 'Transforming Treasures from Trash',
        date: "11/01/2024",
        category: "Body",
        author: "Diane uwamariya",
        img: 'https://media.glamour.com/photos/65cce0375ea0c25e5b06764f/4:3/w_2664,h_1998,c_limit/spring%202024%20fashion%20trends.jpg',
        summary: 'Sustainability is becoming increasingly important, and upcycled fashion is a trendy way to embrace eco-friendly style. This piece delves into the world of upcycling clothes and accessories, showcasing creative ways to transform old garments into stunning new pieces.  We`ll provide tips on finding hidden treasures at thrift stores, along with easy upcycling techniques for beginners.'
    },
    {
        name: 'The Secret Lives of Urban Wildlife',
        date: "11/01/2024",
        category: "Body",
        author: "Diane uwamariya",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5eP-VjEjfKSeyyNTcUT_exCSx5L3psEBu6j8BXrcmA&s',
        summary: 'Cities may seem like concrete jungles, but they`re teeming with fascinating wildlife. This article explores the hidden world of urban animals, from cunning raccoons navigating back alleys to resourceful pigeons thriving in city parks.  We`ll learn how these creatures adapt to their urban habitat and discuss ways we can co-exist peacefully with our wild neighbors.'
    },
    {
        name: 'The Rise of the Micromobility Revolution: Tiny Vehicles, Big Impact',
        date: "12/3/2024",
        category: "soul",
        author: "Diane Uwamariya",
        img: 'https://s.aolcdn.com/commerce/blogcdn/green.autoblog.com/media/2013/01/2013-smart-fortwo-cityflame628p.jpg',
        summary: "Our cities are congested, polluted, and in desperate need of change. Enter micromobility - a transportation revolution powered by electric scooters, bikes, and other compact vehicles. This article explores the growing trend of micromobility, highlighting its potential to transform urban landscapes. We'll discuss the environmental benefits, the impact on city infrastructure, and the safety considerations of this exciting transportation shift."
    },
    {
        name: 'The Allure of Astrophotography: Capturing the Cosmos in a Click',
        date: "25/02/2024",
        category: "soul",
        author: "Diane Uwamariya",
        img: 'https://cdn.britannica.com/60/190760-131-F1576E0B/space-background-telescope-silhouette-NASA-image-elements.jpg',
        summary: "For centuries, humans have gazed at the stars with wonder. Now, astrophotography allows us to capture the beauty and vastness of the cosmos in stunning detail. This article delves into the world of astrophotography, detailing the equipment, techniques, and best practices for capturing breathtaking celestial images. Whether you're a seasoned photographer or a curious beginner, this article will inspire you to explore the night sky through the lens."
    },
    {
        name: 'The Power of Play: Why Adults Need Recess Too',
        date: "25/02/2024",
        category: "soul",
        author: "Diane Uwamariya",
        img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2018_26/2480601/180628-stock-playful-couple-beach-better-ew-107p.jpg',
        summary: "Remember the joy of carefree playtime as a child? As adults, we often forget the importance of play. This article explores the benefits of incorporating playfulness into your daily routine. Learn how play can reduce stress, boost creativity, and foster stronger connections with others. We'll provide ideas for rediscovering your inner child, from board games to outdoor adventures."
    },
    {
        name: 'The Future of Food: Lab-Grown Meat and the Evolving Plate',
        date: "25/02/2024",
        category: "soul",
        author: "Diane Uwamariya",
        img: 'https://canadianbusiness.com/wp-content/uploads/2022/05/CB-Spring2022-Feature-MeatMarket-01-Main.jpg',
        summary: "With a growing population and environmental concerns, the future of food is a pressing issue. This article explores the potential of lab-grown meat as a sustainable and ethical alternative to traditional agriculture. Learn about the science behind lab-grown meat, its potential impact on the environment and animal welfare, and the challenges and opportunities that lie ahead."
    },
    {
        name: 'The Harmony of Fermentation: From Bubbly Brews to Gut-Friendly Foods',
        date: "25/02/2024",
        category: "Spirit",
        author: "Diane Uwamariya",
        img: 'https://freakofnatural.com/wp-content/uploads/2021/05/cibi-fermentati-in-barattolo.jpg',
        summary: "The art of fermentation has been around for millennia, used to preserve food and create delicious beverages. This article explores the fascinating world of fermentation, delving into its history, the science behind the process, and its modern applications. Learn how fermentation creates everything from tangy sauerkraut to your favorite craft beer, and discover the potential benefits for your gut health."
    },
    {
        name: 'The Unexpected Symphony: Music and Mental Wellbeing',
        date: "25/02/2024",
        category: "Spirit",
        author: "Diane Uwamariya",
        img: 'https://images.ctfassets.net/qr4fhhcghyn4/b039b3eed2f4112c399898682faa2555538e8a0c/aa511b1ca67843eef84933e292fe7ee2/girl-listening-to-music-on-grass.jpg',
        summary: "Music is a powerful force that can evoke emotions, memories, and even influence our mental state. This article explores the connection between music and mental wellbeing. Learn how music can reduce stress, improve mood, and even aid in cognitive function. We'll discuss different music genres and their potential benefits, and provide tips for creating a personalized playlist for your mental well-being."
    },
  ]

export default Categories;