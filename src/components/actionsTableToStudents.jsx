import React from "react";

export const ActionsToStudents = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <button style={addButtonStyle}>Adicionar</button>
            <button style={editButtonStyle}>Editar</button>
        </div>
    );
};

const addButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#28a745", 
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
};

const editButtonStyle = {
    ...addButtonStyle, // Estende as propriedades do botão de Adicionar
    backgroundColor: "#007bff", 
};

export default ActionsToStudents;
