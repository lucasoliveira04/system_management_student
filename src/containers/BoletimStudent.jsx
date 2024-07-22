import { useEffect, useState } from "react";
import axios from "axios";
import {SpinnerLoading} from "../components/SpinnerLoading.jsx";

export const BoletimStudent = ({ idStudent, onClose }) => {
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/historico-escolar/${idStudent}`);
                setStudentData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStudentData();
    }, [idStudent]);

    if (!studentData) {
       return <SpinnerLoading/>
    }

    if (!studentData.dataStudentsDto){
        return <SpinnerLoading/>
    }

    const columns = ["ID", "Português", "Matemática", "História", "Geográfia", "Fisica", "Media Final", "Bimestre", "Ano"]
    const results_data = studentData.dataStudentsDto.map((record) => (
        <tr key={record.id}>
            <td>{record.id}</td>
            <td>{record.nota_1}</td>
            <td>{record.nota_2}</td>
            <td>{record.nota_3}</td>
            <td>{record.nota_4}</td>
            <td>{record.nota_5}</td>
            <td>{record.mean_result_final}</td>
            <td>{record.bimestre}</td>
            <td>{record.ano}</td>
        </tr>
    ))

    return (
        <div className="boletim-container">
            <button className="close-button btn btn-danger" onClick={onClose}>X</button>
            <h2>Histórico do Aluno: {studentData.name} | <u>{studentData.cpf}</u> </h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {results_data}
                </tbody>
            </table>
        </div>
    );
};
