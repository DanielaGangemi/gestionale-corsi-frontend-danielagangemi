import { LoginForm } from "../../components/LoginForm/LoginForm";
import loginStyle from "./Login.module.css"

export function Login() {
    return (
        <>
            <div className={loginStyle.container}>
                <LoginForm></LoginForm>
            </div>
        </>

    )
}