import registrationStyle from "./Registration.module.css"
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";

export function Registration() {

    return (
        <>
        <div className={registrationStyle.container}>
                <RegistrationForm></RegistrationForm>
            </div>
        </>
    );
}