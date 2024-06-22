const Person = ({ Contact }) => {
  return (
    <div className="text-black flex items-center gap-2 py-3 border-b-2">
      <img
        src={Contact.avatar}
        alt={Contact.name}
        className="rounded-full h-9"
      />
      <div className="w-full">
        <div>
          <div className="font-semibold text-sm">{Contact.name}</div>
          <div className="font-semibold text-[13px] text-[#B6B6B6]">
            {Contact.contact}
          </div>
        </div>
      </div>
      <div className="float-end">
        <i className="fa-solid fa-ellipsis text-2xl text-[#B7B7B7] mr-1"></i>
      </div>
    </div>
  );
};

export default Person;
