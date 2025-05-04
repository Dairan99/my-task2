import { ChangeEvent, FormEvent, useState } from "react"
import { login } from "../api/login"


const LoginUser = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event:FormEvent) => {
        event.preventDefault()

        const loginData = {
            name:name,
            password:password
        }

        try {
            const result = await login(loginData)
            setMessage("Вход")
            console.log("Успешный вход", result);
        } catch (error:any) {
            setMessage(`ошибка входа ${error.message}`)
            console.log(error);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleName} value={name}></input>
            <input onChange={handlePassword} value={password} type="password"></input>
            <button type="submit">Войти</button> 
            {message && <div>{message}</div>}
        </form>
        </>
    )
}

export default LoginUser