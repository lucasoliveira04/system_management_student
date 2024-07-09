import  { useState, useEffect } from 'react';
import "../../public/css/auth.css";
import { FormComponent } from "../components/formComponent.jsx";
import {MessageComponent} from "../components/MessageComponent.jsx";

/**
 * Componente de autenticação de formulário.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Function} props.onSubmit - Função chamada quando o formulário é submetido.
 * @param {string} props.username - O nome de usuário.
 * @param {string} props.password - A senha do usuário.
 * @param {Function} props.setUsername - Função para atualizar o nome de usuário.
 * @param {Function} props.setPassword - Função para atualizar a senha.
 * @param {boolean} props.loginError - Indicador de erro de login.
 * @returns {JSX.Element} O componente de autenticação de formulário.
 */
export const FormAuth = ({
                             onSubmit,
                             username,
                             password,
                             setUsername,
                             setPassword,
                             loginError,
                         }) => {

    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (loginError) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
            }, 10000); 

            return () => clearTimeout(timer);
        }
    }, [loginError]);

    const handleChange = (setter) => (e) => {
        const value = e.target.value.trim();
        setter(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    const inputsConfig = [
        {
            type: "text",
            placeholder: "Email / Username",
            value: username,
            onChange: handleChange(setUsername),
            className: loginError ? "input-error" : "",
        },
        {
            type: "password",
            placeholder: "Senha",
            value: password,
            onChange: handleChange(setPassword),
            className: loginError ? "input-error" : "",
        }
    ];

    const buttonsConfig = [
        {
            type: 'submit',
            label: 'Entrar',
            className: 'btn btn-primary',
            onClick: handleSubmit
        },
        {
            type: 'button',
            label: 'Recuperar Senha',
            className: 'button-recuperar-senha btn btn-secondary',
            onClick: () => console.log('Recuperar Senha clicked')
        }
    ];

    return (
        <div className="form-container">
            <div className="form-title-container">
                <h1 id="login">LOGIN</h1>
            </div>
            <FormComponent
                inputsConfig={inputsConfig}
                buttonsConfig={buttonsConfig}
            />
            {showError && (
                <MessageComponent
                    message={"Usuário ou senha incorretos. Por favor, tente novamente."}
                    typeMessage={"error"}
                    classnameLabel={"error-message"}
                />
            )}
        </div>
    );
};
