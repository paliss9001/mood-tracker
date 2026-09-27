import Info from "./components/Info"
import { isExistingUser } from "./helpers/functions"

export default function App() {
  const userExists = isExistingUser()

  // if user exists
    // show main page using user's data

  // else
    // show onboarding

  return (
    <Info
      title={"Personalize your experience"}
      subtitle={"Add your name and a profile picture to make Mood yours."}
      actionText={"Start Tracking"}
    >

    </Info>
  )
}