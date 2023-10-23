'use client'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const LatestDonations = ()=>{
    return(
        <div className=" w-full h-[250px] ss:h-auto box-border border rounded  shadow-lg p-9 flex flex-col gap-2">
            <div>
                <label className="font-family-Roboto text-blue-950 text-2xl font-bold">Latest Donations</label>
            </div>
            <div className="flex flex-row">
                <label className="font-family-Roboto text-xl font-semibold basis-1/2">Donation Name</label>
                <label className="font-family-Roboto text-xl font-semibold basis-1/2">Donation Amt</label>
                <label className="font-family-Roboto text-sm font-semibold">Action</label>
            </div>
            <div className="flex  flex-row">
                <label className="font-family-Roboto text-lg basis-1/2">Yasith Sandesh vithanage</label>
                <label className="font-family-Roboto text-lg basis-1/2">20000$</label>
                <label className="font-family-Roboto text-xl font-semibold"><RemoveRedEyeIcon/></label>
            </div>

            <div className="flex  flex-row">
                <label className="font-family-Roboto text-lg basis-1/2">Yasith Sandesh</label>
                <label className="font-family-Roboto text-lg basis-1/2">20000$</label>
                <label className="font-family-Roboto text-xl font-semibold"><RemoveRedEyeIcon/></label>
            </div>
            <div className="flex  flex-row">
                <label className="font-family-Roboto text-lg basis-1/2">Yasith Sandesh</label>
                <label className="font-family-Roboto text-lg basis-1/2">20000$</label>
                <label className="font-family-Roboto text-xl font-semibold"><RemoveRedEyeIcon/></label>
            </div>
        </div>
    )
}

export default LatestDonations