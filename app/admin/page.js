import ActiveRequests from '@/components/ActiveRequests'
import AddNewEvent from '@/components/AddNewEvent'
import UserCount from '@/components/UserCount'
import React from 'react'
import profile from "public/profile.png"
import Events from '@/components/EventsCards'
import EventsCards from '@/components/EventsCards'
import Request from '@/components/Request'
import { Form } from '@/components/Form'

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