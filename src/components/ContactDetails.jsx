import telegramImg from "../assets/telegramImg.png"
import whatsappImg from "../assets/whatsappImg.png"

const ContactDetails = ({ Contact, toggleDetails }) => {
    return (
        <div className="overflow-scroll bg-white text-black absolute min-h-screen w-full m-0 p-0 md:flex">
            {/* <button onClick={toggleDetails}>Back</button> */}
            <div className=" flex gap-3 justify-evenly w-full min-h-60 py-7 border-b-2 md:w-1/2">
                <div className=" w-1/4 flex justify-evenly cursor-pointer" onClick={toggleDetails}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </div>
                <div className=" w-full flex  gap-4 flex-col justify-center items-center text-xl">
                    <h1 className="text-3xl">Contacts</h1>
                    <img src={Contact.avatar} alt={Contact.name} className="rounded-full h-[138px] " />
                    <div className="flex items-center flex-col">
                        <h2 className="text-xl font-semibold">{Contact.name}</h2>
                        <h2 className="text-sm">{Contact.country} </h2>
                    </div>
                </div>
                <div className=" w-1/4 flex justify-evenly cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </div>
            </div>
            <div className="custom-bg min-h-full w-full md:w-1/2  md:m-5 md:rounded-3xl">

                <div className="py-3">
                    <div className="min-h-14 py-4 px-9 flex justify-between">
                        <div className="">
                            <h2 className="font-semibold text-xl">Mobile</h2>
                            <h2 className="text-[#B6B6B6] text-[16px]">{Contact.contact}</h2>
                        </div>
                        <div className=" gap-2 flex items-center">
                            <div className="rounded-full bg-white p-2 icons-drop-shadow cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div className="rounded-full bg-white p-2 icons-drop-shadow cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="min-h-14 py-4 px-9 flex justify-between">
                        <div className="">
                            <h2 className="font-semibold text-xl">Email</h2>
                            <h2 className="text-[#B6B6B6] text-[16px]">{Contact.email}</h2>
                        </div>
                        <div className=" gap-2 flex items-center">

                            <div className="rounded-full bg-white p-2 icons-drop-shadow cursor-pointer cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="bg-white py-4 px-9 text-xl font-semibold border-b-4 border-[#B7B7B7]">Accounts Linked</h1>
                    <div className="flex flex-col gap-4 justify-around py-5">
                        <div className="px-9 flex justify-between">
                            <h1 className="text-xl font-semibold pt-1">Telegram</h1>
                            <div className="cursor-pointer">
                                <img src={telegramImg} alt="Telegram" className="h-8 pr-1" />
                            </div>
                        </div>
                        <div className="px-9 flex justify-between">
                            <h1 className="text-xl font-semibold pt-2">Whatsapp</h1>
                            <div className="cursor-pointer" >
                                <img src={whatsappImg} alt="whatsapp" className="h-10" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className="bg-white py-4 px-9 text-xl font-semibold border-b-4 border-[#B7B7B7]">More options</h1>
                    <div className="py-4 px-9 flex justify-between">
                        <h1 className="text-xl font-semibold cursor-pointer">Share Contact</h1>
                    </div>
                    <div className="py-4 px-9 flex justify-between">
                        <h1 className="text-xl font-semibold cursor-pointer">QR Code</h1>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ContactDetails