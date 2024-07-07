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
       <SpinnerLoading/>
    }

    return (
        <div className="boletim-container">
            <button className="close-button btn btn-danger" onClick={onClose}>X</button>
            <h2>Histórico do Aluno: {studentData.name}</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Nota 4</th>
                    <th>Nota 5</th>
                    <th>Média Final</th>
                    <th>Bimestre</th>
                    <th>Ano</th>
                </tr>
                </thead>
                <tbody>
                {studentData.dataStudentsDto.map((record) => (
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
                ))}
                </tbody>
            </table>
        </div>
    );
};
