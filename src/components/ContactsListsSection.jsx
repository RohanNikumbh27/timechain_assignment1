import { memo } from "react"
import Person from "./Person"
const ContactsListSection = ({ finalArray }) => {
    return (
        <div className="text-black min-h-svh w-full my-4 rounded-xl">
            <h1>Contacts</h1>
            <ul className="bg-transferent min-h-svh w-fu">
                {finalArray.map((obj) => (
                    <li key={obj.Alphabet}>
                        <div>
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default memo(ContactsListSection)

