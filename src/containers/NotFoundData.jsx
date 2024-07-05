import {MessageComponent} from "../components/MessageComponent.jsx";
import {useAuth} from "../context/AuthContext.jsx";

export const NotFoundData = () => {
    const { userData } = useAuth()

    const objectData = [
        { label: 'Nome', value: userData.name },
        { label: 'E-mail', value: userData.email },
        { label: 'RG', value: userData.rg },
        { label: 'CPF', value: userData.cpf }
    ]

    const checkIfThereIsNoNullData = () => {
        const missingFields = []
        for (const data of objectData) {
            if (!data.value){
                missingFields.push(data.label)
            }
        }
        return missingFields
    }

    const missingFields = checkIfThereIsNoNullData()

    return (
        <div>
            {missingFields.length > 0 && (
                <MessageComponent
                    message={`Por favor preencha os seguintes dados: ${missingFields.join(', ')}.`}
                    typeMessage={"error-message"}
                />
            )}
        </div>
    )
}