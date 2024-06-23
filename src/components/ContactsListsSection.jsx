import Person from "./Person"

const ContactsSection = ({ obj }) => {
    return (<>
        {(obj.PersonsArray.length) > 0 && <div className=" flex flex-col justify-end">
            <h1 className="mx-auto mr-4 inline-block font-bold">{obj.Alphabet.toUpperCase()}</h1>
            <div className=" min-w-full mb-2 rounded-xl">
                <ul className="hello">
                    {obj.PersonsArray.map((Contact) => (
                        <li key={Contact.id} className="">
                            <Person Contact={Contact} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>}

    </>
    )
}


export default ContactsSection

