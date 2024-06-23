
const SearchComp = ({ searchQ, setSearchQ }) => {
    // const sQ = useRef("");
    const setNewSearchQFunction = (event) => {
        setSearchQ(event.target.value)
    }

    return (
        <div className="px-[24px]">
            <div className=" flex items-center justify-evenly w-full h-10 rounded-xl drop-shadow-input my-5 gap-4 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#B7B7B7] ml-4">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
                <div className="inline-block w-[80%]">
                    <input
                        type="text"
                        // ref={sQ}
                        value={searchQ}
                        onChange={setNewSearchQFunction}
                        className="w-full text-md active:border-none"
                        placeholder="Search by name or number"
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default SearchComp