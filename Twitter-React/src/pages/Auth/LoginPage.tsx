import Button from "../../components/button";
import { login } from "./service";

interface Props {
    onLogin: () => void;
}

function LoginPage(props: Props) {
    const habdleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await login({
                username: event.target.username.value,
                password: event.target.password.value
            })  
            console.log(response)
            props.onLogin();
        } catch (error) {
            console.error(error)
        }
        
        
    }
    return (
        <div>
            <h1>Log in Now!</h1>
            <form onSubmit={habdleSubmit}>
        <label className="block">
            <label className="block">
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <Button type="submit" $variant="primary">Submit</Button>
        </label>
        
        </form>
        </div>
)}

export default LoginPage;