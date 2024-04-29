import React from 'react';



function CarouselPromo() {
  return (
    <div className='carousel'>
      <div className=''>
        {data.map((d) => (
          <div>
            <div>
              <img src={d.img} alt=""/>
            </div>

            <div>
              <p>{d.name}</p>
              <p>{d.summary}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
      name: 'How Your Backyard Can Become a Research Lab',
      img: 'https://cloudfrontgharpediabucket.gharpedia.com/uploads/2020/04/Tips-to-Set-Up-Laboratory-at-Home-01-0502040015.jpg',
      summary: 'Imagine contributing to groundbreaking discoveries without leaving your porch! Citizen science projects are on the rise, allowing anyone to participate in real scientific research. This article explores the fascinating world of citizen science, highlighting projects you can join to study everything from backyard birds to distant galaxies. We`ll discuss the benefits of citizen science for both research and participants, and provide tips on getting started.'
  },
  {
      name: 'Decoding Drooping Leaves and Thirsty Blooms',
      img: 'https://www.thespruce.com/thmb/y3zreqqlPUXpAt1ZKzKdP4EPgsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/why-is-my-peace-lily-drooping-b79fe417c59f4a05952015b7d345e5de.jpg',
      summary: 'Houseplants add life and beauty to our homes, but sometimes they become finicky. This article delves into the secret language of houseplants, helping you decipher what your drooping leaves and thirsty blooms are trying to tell you. Learn about common signs of distress, like underwatering and lack of light, and discover tips for keeping your leafy companions happy and thriving.'
  },
  {
      name: 'Unleashing Epic Adventures Without Breaking the Bank',
      img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/stock%2Fcustom%20stock%2F2022-11-custom-stock%2Fgames-0228-edit',
      summary: 'Board games are a fantastic way to connect with friends and family, but the cost of new releases can be daunting. This article explores the world of affordable board games, offering recommendations for budget-friendly options across various genres. We`ll also discuss strategies for maximizing your existing game collection and explore free online resources for printing and playing your own board games.'
  },
  {
      name: 'Why a Good Chuckle is the Best Medicine',
      img: 'https://as1.ftcdn.net/v2/jpg/05/57/89/30/1000_F_557893040_G93c2ZDPjmdiPaJdVsD0b3gtFnlmJHq3.jpg',
      summary: 'Laughter truly is the best medicine! This article examines the scientific evidence behind the healing power of humor. Learn how laughter boosts your immune system, reduces stress, and promotes a sense of well-being. We`ll explore different ways to incorporate more laughter into your life, from watching a funny movie to spending time with friends who make you giggle.'
  },
  {
      name: 'Transforming Treasures from Trash',
      img: 'https://media.glamour.com/photos/65cce0375ea0c25e5b06764f/4:3/w_2664,h_1998,c_limit/spring%202024%20fashion%20trends.jpg',
      summary: 'Sustainability is becoming increasingly important, and upcycled fashion is a trendy way to embrace eco-friendly style. This piece delves into the world of upcycling clothes and accessories, showcasing creative ways to transform old garments into stunning new pieces.  We`ll provide tips on finding hidden treasures at thrift stores, along with easy upcycling techniques for beginners.'
  },
  {
      name: 'The Secret Lives of Urban Wildlife',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5eP-VjEjfKSeyyNTcUT_exCSx5L3psEBu6j8BXrcmA&s',
      summary: 'Cities may seem like concrete jungles, but they`re teeming with fascinating wildlife. This article explores the hidden world of urban animals, from cunning raccoons navigating back alleys to resourceful pigeons thriving in city parks.  We`ll learn how these creatures adapt to their urban habitat and discuss ways we can co-exist peacefully with our wild neighbors.'
  },
]

export default CarouselPromo