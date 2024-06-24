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
                        <th>Boletim</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.cpf}</td>
                            <td>{user.rg}</td>
                            <td>{user.email}</td>
                            <td>{user.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};