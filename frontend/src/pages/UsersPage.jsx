import { useEffect, useState } from "react";
import { getUsers, createUser } from "../api/users";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    const handleAdd = async () => {
        const user = await createUser(email);
        setUsers([...users, user]);
        setEmail("");
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(u => <li key={u.id}>{u.email}</li>)}
            </ul>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleAdd}>Add User</button>
        </div>
    );
}