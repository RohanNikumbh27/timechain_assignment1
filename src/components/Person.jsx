import { useState } from "react";
import ContactDetails from "./ContactDetails";

const Person = ({ Contact }) => {

  const [isDetailShown, setIsDetailShown] = useState(false);
  const toggleDetails = () => {
    setIsDetailShown(!isDetailShown);
  }

  // console.log("Contact isFinite", Contact)
  return (
    <div className="text-black flex items-center gap-2 py-3 border-b-2 animateIt">
      {Contact.avatar ? (<img
        src={Contact.avatar}
        alt={Contact.name}
        className="rounded-full h-9"
      />) : (<div className="rounded-full h-9 w-9 bg-slate-400" />)}

      <div className="w-full">
        <div>
          <div className="font-semibold text-sm">{Contact.name}</div>
          <div className="font-semibold text-[13px] text-[#B6B6B6]">
            {Contact.contact}
          </div>
        </div>
      </div>

      <button className="cursor-pointer" onClick={toggleDetails}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#B7B7B7] mr-1">
          <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
        </svg>
      </button>


      <div className={`fixed overflow-scroll left-0 top-0 bottom-0 min-h-svh  w-full m-0 p-0 ${isDetailShown ? "block" : "hidden"}`}>
        <ContactDetails Contact={Contact} toggleDetails={toggleDetails} />
      </div>
    </div>
  );
};

export default Person;
