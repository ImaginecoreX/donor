import Image from 'next/image'



const ActiveRequests = ({ title, description, name, date, profile }) => {

    return (
        <div className='w-full h-auto flex flex-row justify-center mb-10 gap-2 ss:flex-col ns:flex-col'>
            <div className='border rounded box-border py-5 px-5'>
                <div class="mb-8">
                    <div class="text font-bold text-xl mb-2 font-family-Roboto">{title}</div>
                    <p class="text2 text-base ss:w-[90%] w-[400px] ">{description}</p>
                </div>
                <div class="flex items-center">
                    <Image class={"w-10 h-10 rounded-full mr-4"} src={profile}  alt='profile'/>
                    <div class="text-sm">
                        <p class="color-blue-700 leading-none">{name}</p>
                        <p class="color-blue-200">{date}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ActiveRequests