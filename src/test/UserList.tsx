import { useEffect, useState } from "react"
import { validateResponse } from "../api/validateResponse"
import { useQuery } from "@tanstack/react-query"

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const fetchList = async ():Promise<User[]> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method:"GET",
            headers: {
                accept: "application/json",
            }
        })
        await validateResponse(response)
        const result:User[] = await response.json()
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
    
}

const UserList = () => {

    const {data, isError, isLoading} = useQuery<User[]>({
        queryFn:() => fetchList(),
        queryKey:["user"],
        retry:false
    })

    useEffect(() => {
        fetchList()
    }, [])

    if (isError) {
        return <p>Error</p>
    }
    
    if (isLoading) {
        return  <p>Loading</p>
    }

    return (
        <div>
            <ul>
                {data?.map((item:User) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList