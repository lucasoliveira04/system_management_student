export const NotFoundPage = () => {
    return (
        <div style={style.main}>
            <h1 style={style.font}>No momento estamos fora do ar!</h1>
        </div>
    )
}

const style = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%"
    },
    font:{
        fontSize: '34px',
        color: "red"
    }
}