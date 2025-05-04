import { useEffect, useState } from "react"
import { validateResponse } from "../api/validateResponse"

interface IUsers {
    id:number,
    name:string
}

const usersFetch = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method:"GET",
            headers: {
                accept: "application/json",
            },
            credentials:"include",
        })
        const validate = await validateResponse(response)
        const data = await validate.json()
        return data
    } catch (error) {
        console.log(error);
        throw error
    }
    
}


const UserList = () => {
    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const userData = await usersFetch()
            setUsers(userData)
        }
        fetchData()
    },[])

    return (
        <>
        <ul>
            {users.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </>
    )
}

export default UserList