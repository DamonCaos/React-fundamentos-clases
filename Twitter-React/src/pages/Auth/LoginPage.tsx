import Button from "../../components/button";
import { login } from "./service";
import { useState } from "react";
import React from "react"; 
interface Props {
    onLogin: () => void;
    onLogout: () => void;
}

function LoginPage(props: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [isdisabled, setIsDisabled] = useState(true);
    const habdleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await login({
                username: username,
                password: password
            })  
            console.log(response)
            props.onLogin();
        } catch (error) {
            console.error(error)
        }
        
        
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const isDisabled = !username || !password;

    return (
        <div>
            <h1>Log in Now!</h1>
            <form onSubmit={habdleSubmit}>
        <label className="block">
            <label className="block">
                Username:
                <input type="text"
                 name="username" 
                 value={username} 
                 onChange={handleUsernameChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePasswordChange} />
            </label>
            <Button type="submit" variant="primary" disabled={isDisabled}>Log in</Button>
        </label>
        
        </form>
        </div>
)}

export default LoginPage;