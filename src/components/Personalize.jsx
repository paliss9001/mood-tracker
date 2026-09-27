import Info from './Info';
import logo from '/assets/images/logo.svg';

export default function Personalize() {

  return (
    <div className='personalize'>
      <img width={177} height={40} src={logo}></img>
      <Info
          title={"Personalize your experience"}
          subtitle={"Add your name and a profile picture to make Mood yours."}
          actionText={"Start Tracking"}
      ></Info>
    </div>
  )
}