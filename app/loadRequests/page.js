'use clients'

import React from 'react'
import {LoadRequests,} from '../../components/Cards'

const requests = () => {
    return (
        <div className='flex flex-wrap justify-center gap-10 m-10'>

            <LoadRequests/>
            <LoadRequests/>
            <LoadRequests/>
            <LoadRequests/>
            <LoadRequests/>
            <LoadRequests/>
            <LoadRequests/>
            <LoadRequests/>
            
        </div>
    )
}

export default requests
