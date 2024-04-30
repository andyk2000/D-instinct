import React from 'react';
import './Article.css';

function Article() {
  return (
    <div className='article'>
        <div className='cover-img-frame'>
            <img className="cover-img" alt="" src="https://img.freepik.com/premium-photo/black-white-silhouette-portrait-pregnant-woman-with-hands-belly-white-background-expectation-concept_108611-2165.jpg"/>
        </div>
        <div className='content'>
            <p className='date'>11/01/2024</p>
            <h2 className='title'>Shattered Dreams: Understanding and Coping with Stillbirth</h2>
            <p className='author'>Diane uwamariya</p>
            <p className='body'>The anticipation of a new life brings immense joy, but for some families, this dream is tragically shattered by stillbirth. Stillbirth, defined as the loss of a baby after 20 weeks of pregnancy, is a heart-wrenching experience that affects millions globally. While the pain is raw and overwhelming, understanding the causes, navigating the immediate aftermath, and accessing support resources can be the first steps towards healing. 
            
            Several factors can contribute to stillbirth, including:

            Pregnancy complications: Preeclampsia, a condition causing high blood pressure, and placental abruption, where the placenta separates from the uterine wall, can deprive the baby of oxygen and nutrients. Birth defects: Congenital malformations in the baby can compromise its development. 
            
            Infections: Certain infections during pregnancy can be detrimental to the baby's health. Umbilical cord problems: Issues with the umbilical cord, such as knots or prolapse, can restrict oxygen flow.  
            The signs of stillbirth can vary depending on the stage of pregnancy. Decreased fetal movement, changes in vaginal discharge, and a lack of fetal heartbeat on ultrasound are some potential indicators. If you experience any concerns, it's crucial to seek immediate medical attention. 
            In the immediate aftermath of a stillbirth, emotions like shock, grief, anger, and guilt are common. Allow yourself to feel these emotions and seek support from loved ones, healthcare professionals, or support groups specifically for families who have experienced stillbirth.  
            Here are resources to help navigate this difficult journey: 
            
            March of Dimes: Provides resources and support for families affected by stillbirth [https://www.marchofdimes.org/our-work/policy-advocacy/stillbirth-policy] 
            
            Star Legacy Foundation: Offers support groups and resources for grieving parents [https://starlegacyfoundation.org/about-us/] 
            
            Share Pregnancy & Infant Loss Support: Connects families who have experienced pregnancy loss [https://nationalshare.org/] 
            Remember, healing after stillbirth is a personal journey. Be kind to yourself, seek support, and allow yourself to grieve. With time and support, you can find strength and rebuild your future.</p>
            <div className='keywords-container'></div>
            <div className='comment-section'></div>
        </div>
    </div>
  )
}

const data = [
    {
        name: "Shattered Dreams: Understanding and Coping with Stillbirth",
        date: "11/01/2024",
        category: "Soul",
        author: "Diane uwamariya",
        img: 'https://img.freepik.com/premium-photo/black-white-silhouette-portrait-pregnant-woman-with-hands-belly-white-background-expectation-concept_108611-2165.jpg',
        summary: "Stillbirth, the loss of a baby after 20 weeks of pregnancy, is a devastating experience. This article offers understanding and support to families navigating this heartbreaking journey. It explores the causes, coping mechanisms, and resources available to help families heal.",
        body: "The anticipation of a new life brings immense joy, but for some families, this dream is tragically shattered by stillbirth. Stillbirth, defined as the loss of a baby after 20 weeks of pregnancy, is a heart-wrenching experience that affects millions globally. While the pain is raw and overwhelming, understanding the causes, navigating the immediate aftermath, and accessing support resources can be the first steps towards healing. \n\n Several factors can contribute to stillbirth, including: \n * Pregnancy complications: Preeclampsia, a condition causing high blood pressure, and placental abruption, where the placenta separates from the uterine wall, can deprive the baby of oxygen and nutrients. * Birth defects: Congenital malformations in the baby can compromise its development. * Infections: Certain infections during pregnancy can be detrimental to the baby's health. * Umbilical cord problems: Issues with the umbilical cord, such as knots or prolapse, can restrict oxygen flow.  \n\n The signs of stillbirth can vary depending on the stage of pregnancy. Decreased fetal movement, changes in vaginal discharge, and a lack of fetal heartbeat on ultrasound are some potential indicators. If you experience any concerns, it's crucial to seek immediate medical attention. \n\n In the immediate aftermath of a stillbirth, emotions like shock, grief, anger, and guilt are common. Allow yourself to feel these emotions and seek support from loved ones, healthcare professionals, or support groups specifically for families who have experienced stillbirth.  \n\n Here are resources to help navigate this difficult journey: \n * March of Dimes: Provides resources and support for families affected by stillbirth [https://www.marchofdimes.org/our-work/policy-advocacy/stillbirth-policy] * Star Legacy Foundation: Offers support groups and resources for grieving parents [https://starlegacyfoundation.org/about-us/] * Share Pregnancy & Infant Loss Support: Connects families who have experienced pregnancy loss [https://nationalshare.org/] \n\n Remember, healing after stillbirth is a personal journey. Be kind to yourself, seek support, and allow yourself to grieve. With time and support, you can find strength and rebuild your future.",
        keywords: "Stillbirth, fetal loss, pregnancy loss, miscarriage, perinatal bereavement, support groups, March of Dimes, Star Legacy Foundation, Share Pregnancy & Infant Loss Support"
        
    },
]

export default Article