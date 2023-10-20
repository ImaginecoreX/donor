import ActiveRequests from '@/components/ActiveRequests'
import AddNewEvent from '@/components/AddNewEvent'
import UserCount from '@/components/UserCount'
import React from 'react'
import profile from "public/profile.png"
import EventsCards from '@/components/EventsCards'
import Request from '@/components/Request'

const Cards = [
    {
        title: '10 lakhs required for brain surgery',
        description: 'In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. The sun, a timid orange orb, began its slow ascent over the horizon, painting the sky with hues of pink and gold. Birds greeted the dawn with their melodious songs, as if announcing the start of a new day filled with endless possibilities. In this tranquil moment, the worries of yesterday faded, and hope for tomorrow blossomed like a fragile flower in the garden of the present.',
        name: 'Jonathan Reinink',
        date: 'Aug 18',
    },
    {
        title: '10 lakhs required for brain surgery',
        description: 'In the quiet stillness of the early morning, the world seemed to hold its breath. Dew glistened on the grass, and a gentle breeze whispered through the leaves. The sun, a timid orange orb, began its slow ascent over the horizon, painting the sky with hues of pink and gold. Birds greeted the dawn with their melodious songs, as if announcing the start of a new day filled with endless possibilities. In this tranquil moment, the worries of yesterday faded, and hope for tomorrow blossomed like a fragile flower in the garden of the present.',
        name: 'Jonathan Reinink',
        date: 'Aug 18',
    },

];

const admin = () => {
    return (
        <div className='mt-14'>
            <UserCount />
            <AddNewEvent />
            {Cards.map((card, index) => (
                <ActiveRequests key={index} title={card.title} description={card.description} name={card.name} date={card.date} profile={profile} />
            ))}    
            <EventsCards/>
            <Request/>

        </div>
    )
}

export default admin
=======
import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import UserCount from '../../components/UserCount'
import NewRequest from '../../components/NewRequest'
import ChartG from '../../components/ChartG'

const Dashboard = () => {
  return (
    <div className='w-full h-auto' >
    <div className='flex'>
      <div className='basis-1/4  ss:hidden sm:hidden md:hidden ns:hidden'>
      <AdminSideBar/>
      </div>
      <div className='basis-3/4 flex-col h-screen overflow-scroll'>
        <div className='flex flex-col '>
          <div>
            <UserCount />
          </div>

          <div className=' flex flex-row '>
            <ChartG/>

            <NewRequest />
          </div>

        </div>
        <div className='flex ss:flex-col gap-6 mt-5'>
          
          <div className='w-[500px]'>
            <NewRequest />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard

