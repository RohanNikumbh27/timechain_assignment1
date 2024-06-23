import Person from "./Person";

const RecentContacts = ({ List }) => {
    const recentC = List.slice(0, 3);
    return (
        <div>
            <h1>Recent</h1>
            {/* Recent 3 Contacts (Random) */}
            <div>
                <ul>
                    {recentC.map((Contact) => (
                        <li key={Contact.id}>
                            <Person Contact={Contact} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecentContacts