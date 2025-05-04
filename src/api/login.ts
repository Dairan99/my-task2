import { validateResponse } from "./validateResponse"

interface ILoginData {
    name:string
    password:string
}

export const login = async (loginData:ILoginData) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "applicattion/json",
                accept:"application/json"
            },
            credentials:"include",
            body: JSON.stringify(loginData)
        })
        await validateResponse(response)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error);
    }  
}