import Info from "./components/Info"
import Personalize from "./components/Personalize"
import { isExistingUser } from "./helpers/functions"

export default function App() {
  const userExists = isExistingUser()

  console.log(userExists)

  return (
    <div className="container-modal">
      {!userExists && <Personalize></Personalize>}
    </div>
  )
}