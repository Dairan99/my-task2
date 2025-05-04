import { ChangeEvent, FormEvent, useState } from "react"

const LoginForm = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault()

        if (!login || !password) {
            setError('Please fill in all fields.')
            return
        }

        setError('')
        setIsSubmitted(true)
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {isSubmitted && <p>Form submitted successfully!</p>}
                {error && <p>{error}</p>}
                <div>
                    <label htmlFor="login">Логин</label>
                        <input type="text" id="login" value={login} onChange={(e:ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                        <input type="text" id="password" value={password} onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default LoginForm