import { HeaderComponent } from "../components/header";
import { TableStudents } from "../components/tableStudents";
import { ActionsToStudents} from "../components/actionsTableToStudents"
import "../../public/css/homePageAdmin.css"

export const HomePageAdmin = () => {
    return(
        <div>
            <HeaderComponent/>
            <div className="container-admin">
                <div className="actions-container">
                    <ActionsToStudents/>
                </div>
                <div className="table-container">
                    <TableStudents/>
                </div>
            </div>
        </div>
    )
}
