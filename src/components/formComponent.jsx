/* eslint-disable react/prop-types */

/**
 * Componente de formulário reutilizável.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Array} props.inputsConfig - Configurações para os inputs do formulário.
 * @param {Array} props.buttonsConfig - Configurações para os botões do formulário.
 * @returns {JSX.Element} O componente de formulário.
 */
export const FormComponent = ({
                                  inputsConfig,
                                  buttonsConfig,
                                  onSubmit
                              }) => {

    /**
     * Renderiza os inputs do formulário.
     *
     * @returns {JSX.Element[]} Os inputs do formulário.
     */
    const renderInputs = () => {
        return inputsConfig.map((input, index) => (
            <input
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
                className={input.className}
            />
        ));
    };

    /**
     * Renderiza os botões do formulário.
     *
     * @returns {JSX.Element[]} Os botões do formulário.
     */
    const renderButtons = () => {
        return buttonsConfig.map((button, index) => (
            <button
                key={index}
                type={button.type}
                onClick={button.onClick}
                className={button.className}
            >
                {button.label}
            </button>
        ));
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-inputs-container">
                {renderInputs()}
            </div>
            <div className="form-button-login-container">
                {renderButtons()}
            </div>
        </form>
    );
};

export default FormComponent;
