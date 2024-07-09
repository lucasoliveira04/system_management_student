import React, { useState } from 'react';
import FormComponent from "../components/formComponent.jsx";
import "../../public/css/form-recuperar-senha.css";
import { MessageComponent } from "../components/MessageComponent.jsx";
import axios from 'axios';

export const FormAlterarSenha = ({
                                     email, onSubmit,
                                 }) => {
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isError, setIsError] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);

    const handleChange = (setter) => (e) => {
        const value = e.target.value.trim();
        setter(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateEmail();
    };

    const validateEmail = () => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail === email) {
            setIsError(false);
            setIsValidEmail(true);
            changePassword();
        } else {
            setIsError(true);
            setIsValidEmail(false);
        }
    };

    const changePassword = async () => {
        try {
            const payload = {
                email: email,
                registerDto: {
                    newPassword: newPassword,
                }
            };
            const response = await axios.post('http://localhost:8080/auth/recuperar-senha', payload);
            console.log("Senha alterada com sucesso:", response.data);
            setPasswordChanged(true);
            onSubmit();
        } catch (error) {
            console.error("Erro ao alterar senha:", error);
        }
    };

    const inputConfig = [
        {
            type: "password",
            placeholder: "Nova senha",
            value: newPassword,
            onChange: handleChange(setNewPassword),
            disabled: !isValidEmail,
        }
    ];

    const buttonsConfig = [
        {
            type: "submit",
            label: "Confirmar",
            className: 'btn btn-success',
        }
    ];

    return (
        <div className="form-container-password">
            <FormComponent
                inputsConfig={inputConfig}
                buttonsConfig={buttonsConfig}
                onSubmit={handleSubmit}
            />
            {isError &&
                <MessageComponent
                    message={"Email inválido"}
                    typeMessage={"error-message"}
                    classname={"error error-message"}
                />
            }
            {passwordChanged && (
                <MessageComponent
                    message={"Senha alterada com sucesso"}
                    typeMessage={"success-message"}
                    classname={"success success-message"}
                />
            )}
        </div>
    );
};

export default FormAlterarSenha;
