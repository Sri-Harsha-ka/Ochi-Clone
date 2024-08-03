import React from 'react'
import Card2 from './innderComponents/Card2'

function Card() {
  return (
    <div className='overflow-hidden pt-20 w-full'>
      <div data-scroll  data-scroll-section  data-scroll-speed="-.3">
        <div className='border-b-[1px] border-zinc-500 text-5xl pb-10 font-sans px-10 pt-10'>
          <span>Client's Review</span>
        </div>
        <div >
          <Card2 image="https://hily.com/wp-content/uploads/2023/02/image-1-2.png" text="I am incredibly impressed with the software's performance and reliability. The user interface is intuitive and easy to navigate, making my tasks more efficient. The features provided are comprehensive and cater to all my needs. Customer support has been prompt and helpful. I appreciate the regular updates that introduce new functionalities. The software's security measures give me peace of mind. Integration with other tools has been seamless. The detailed documentation is a valuable resource. It's clear that a lot of thought has gone into the design. Overall, I highly recommend this software to anyone in need of a robust solution." name="Harsha" />
          <Card2 image="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2021-10/shutterstock_1914098188.jpg?itok=CQ_CzWYG" text="The software has exceeded my expectations in every way. Its speed and efficiency are remarkable, saving me a lot of time. The interface is clean and user-friendly, making it accessible for all skill levels. Customer service is outstanding, always ready to assist with any queries. Regular updates keep the software cutting-edge. The security features are robust, ensuring my data is safe. Integration with other platforms is straightforward and smooth. The comprehensive user manual is extremely helpful. It's evident that the developers prioritize user experience. I couldn't be happier with this software and highly endorse it." name="Visali" />
        </div>
      </div>
    </div>
  )
}

export default Card
