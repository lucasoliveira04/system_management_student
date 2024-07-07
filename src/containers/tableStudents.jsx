import axios from "axios";
import { useEffect, useState } from "react";
import "../../public/css/tableStudents.css";
import { BoletimStudent } from "./BoletimStudent.jsx";

export const TableStudents = () => {
    const [users, setUsers] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/view-all-data/user");
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = users.filter(user => user.dataStudentsDto && user.dataStudentsDto.length > 0);

    const aprovados = filteredUsers.filter(user => user.dataStudentsDto[0].result >= 7);
    const reprovados = filteredUsers.filter(user => user.dataStudentsDto[0].result < 7);

    const combinedUser = [...aprovados, ...reprovados];

    const columns = ["ID", "Nome", "CPF", "RG", "Email", "Media final", "Situação", "Histórico"];
    const numColumns = columns.length;

    return (
        <div className="table-container">
            <table className="students-table">
                <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {combinedUser.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.cpf}</td>
                        <td>{user.rg}</td>
                        <td>{user.email}</td>
                        <td>{user.dataStudentsDto[0].result}</td>
                        <td className={user.dataStudentsDto[0].result < 7 ? 'reprovado' : 'aprovado'}>
                            {user.dataStudentsDto[0].result < 7 ? "Reprovado" : "Aprovado"}
                        </td>
                        <td style={{ cursor: "pointer" }}
                            onClick={() => {
                                console.log("clicked", user.id);
                                setSelectedStudentId(user.id);
                            }}
                        >Obter Histórico</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedStudentId && <BoletimStudent idStudent={selectedStudentId} onClose={() => setSelectedStudentId(null)} />}
        </div>
    );
};
