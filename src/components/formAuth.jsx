import "../../public/css/auth.css";
import { FormComponent } from "./formComponent.jsx";

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

    const handleUsernameChange = (e) => {
        const value = e.target.value.trim();
        return setUsername(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value.trim();
        return setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    const inputsConfig = [
        {
            type: "text",
            placeholder: "Email / Username",
            value: username,
            onChange: handleUsernameChange,
            className: loginError ? "input-error" : "",
        },
        {
            type: "password",
            placeholder: "Senha",
            value: password,
            onChange: handlePasswordChange,
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
            className: 'btn btn-secondary',
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
            {loginError && (
                <div className="error-message">
                    Usuário ou senha incorretos. Por favor, tente novamente.
                </div>
            )}
        </div>
    );
};
