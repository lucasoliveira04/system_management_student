import axios from "axios"
import { useEffect, useState } from "react"
import "../../public/css/tableStudents.css"

export const TableStudents = () => {
    const [users, setUsers] = useState([]);

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

    const combinedUser = [...aprovados, ...reprovados]

    return (
        <div className="table-container">
            <table className="students-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Email</th>
                        <th>Media final</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {combinedUser.map(user => (
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};