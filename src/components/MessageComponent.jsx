export const MessageComponent = ({
    message,
    typeMessage,
    classname,
    classnameLabel
                                 }) => {

    const getMessageClass = () => {
        let baseClass = 'alert'
        if (typeMessage == 'error'){
            baseClass += ' alert-danger'
        } else if(typeMessage == 'success'){
            baseClass += ' alert-success'
        }
        return `${baseClass} ${classname} || ''`
    }

    return (
        <div className={getMessageClass()}>
            <p className={classnameLabel}>{message}</p>
        </div>
    )
}