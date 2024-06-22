import ContactList from "./components/ContactsList";

function App() {
  return (
    <div className="text-black bg-white min-h-svh ">
      <div className="mx-auto w-full sm:w-full md:w-1/2 bg-white min-h-svh pt-[38px] px-[24px]">
        <h1 className="font-semibold text-2xl">My Contacts</h1>
        {/* search-input-container */}
        <div className="flex items-center justify-evenly w-full h-10 rounded-xl drop-shadow-input my-5 gap-4 bg-white">
          <i className="fa-solid fa-magnifying-glass h-full inline-block p-[16px] w-5 text-[#B7B7B7]"></i>

          <div className="inline-block w-[80%]">
            <input
              type="text"
              className="w-full text-md active:border-none"
              placeholder="Search by name or number"
            ></input>
          </div>
        </div>

        <ContactList />
      </div>
    </div>
  );
}

export default App;
