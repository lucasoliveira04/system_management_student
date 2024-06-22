import { AppRoutes } from "./Routes"
import AppProviders from "./context/AppProviders"

function App() {

  return (
    <AppProviders>
      <AppRoutes/>
    </AppProviders>
  )
}

export default App
