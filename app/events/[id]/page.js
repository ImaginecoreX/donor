import { DonationCards } from "../../../components/Cards";

const EventDetails = () => {

  return (
    <div>
      <div className="mt-[100px] mb-10 flex-col">
        <div className="flex w-full h-auto justify-end">
          <div className="flex w-3/4 h-[100px] items-center bgs-yellow-300" style={{ borderRadius: '50px 0px 0px 50px' }}>
            <span className="text-white text-[28px] font-family-Raleway font-semibold ms-11">Hair Donation</span>
          </div>
        </div>
        <div className="flex box-border px-11 sm:px-1 ns:px-1 ss:px-1  py-4 mt-6 md:flex-col sm:flex-col ss:flex-col ns:flex-col">
          <div className="flex-col w-3/4 md:w-full sm:w-full ss:w-full ns:w-full box-border px-5">
            <div className="text-justify font-family-Roboto-Serif text-[20px] color-bw">Hair donation charity events are not just about transforming appearances; they're about transforming lives. Our charity organization recently hosted a remarkable event that not only showcased the power of kindness but also gave a fresh perspective on beauty. On 2023/10/12, at Sri Subodharamaya Malabe, our charity held a hair donation event that left an indelible mark on both participants and beneficiaries.
              Let's take a closer look at the special features that made this event truly exceptional.</div>
            <div className="mt-4 flex-col">
              <div className="text-[24px] font-semibold font-family-Lora color-blue-900">Event Details:</div>
              <div className="mt-4 text-[20px] font-family-Roboto-Serif color-yellow-800">Event Date: 2023/10/12</div>
              <div className="mt-1 text-[20px] font-family-Roboto-Serif color-yellow-800">Location:  Sri Subodharamaya Malabe</div>
            </div>
            <div className="mt-5 text-justify font-family-Roboto-Serif text-[19px] color-bw">
              The Power of Kindness and Transformation: Our hair donation event was more than just a chance to get a haircut; it was an opportunity to make a tangible difference in the lives of those battling hair loss due to medical conditions like cancer. Our volunteers, stylists, and participants came together with hearts full of compassion to show that beauty lies not just in the hair we have but in the love we share.
              Stylists' Expertise: Our event featured a team of skilled hairstylists who ensured that each participant's hair was cut and styled with utmost care. Their expertise guaranteed that the donated hair could be transformed into high-quality wigs for patients in need. Many of our participants left the event with newfound confidence, sporting beautiful new haircuts, thanks to our talented team.
            </div>
            <div className="mt-4 text-[24px] font-semibold font-family-Lora color-blue-900">Inspiring Stories: </div>
            <div className="mt-3 text-justify font-family-Roboto-Serif text-[19px] color-bw">
              The event was marked by the touching stories of the participants who chose to donate their hair. Some participants had grown their hair for years, and others had long, cherished locks. They shared their motivations, from personal experiences with cancer to wanting to make a positive impact. These stories of selflessness and empathy served as a powerful reminder of the strength of the human spirit.
            </div>
            <div className="mt-4 text-[24px] font-semibold font-family-Lora color-blue-900">Wig Fittings and Distribution:</div>
            <div className="mt-3 text-justify font-family-Roboto-Serif text-[19px] color-bw">
              A special feature of our event was the fitting and distribution of wigs to those in need. Beneficiaries, many of whom were undergoing cancer treatment, were welcomed to choose wigs that best suited their preferences. The smiles and gratitude shared during these moments were truly heartwarming.
              Community Spirit: The event was not just about donating hair; it was about building a community of individuals who care. The camaraderie, support, and compassion shared among participants, volunteers, and beneficiaries were truly special. It showcased the impact we can have when we come together to make a difference.
            </div>
          </div>
          <div className="flex-col w-1/4 md:w-full sm:w-full ss:w-full ns:w-full ms-5 md:ms-0 sm:ms-0 ss:ms-0 ns:ms-0 md:mt-7 sm:mt-7 ss:mt-7 ns:mt-7 ">
            <div className="bgs-gray-90 w-full h-[650px] box-border px-4 py-4 justify-center items-center">
              <div className="flex-col overflow-y-auto h-[600px]">
                <DonationCards />
                <DonationCards />
                <DonationCards />
                <DonationCards />
                <DonationCards />
                <DonationCards />
              </div>
            </div>
            <div className="flex-col justify-center items-center text-center mt-4 h-auto w-full bg-yellow-100 box-border px-7 py-10 shadow-lg rounded-[16px]">
              <span className="text-[18px] font-family-Raleway font-semibold text-gray-700">Donate and Participate for <br /> our Events.</span>
              <div className="flex w-full justify-center items-center mt-3">
                <div className="w-[200px] bg-orange-600 h-[50px] rounded-full flex justify-center items-center hover:cursor-pointer">
                  <span className="text-white text-[18px] font-semibold">Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
