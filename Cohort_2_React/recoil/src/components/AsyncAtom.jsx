import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./asyncatoms";



function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const notificationCount = useRecoilState(notifications)
  const totalNotification = useRecoilValue(totalNotificationSelector)


  return <div>
    <button>Home</button>

    <button>Network ({notificationCount.network}) </button>
    <button>Jobs ({notificationCount.jobs}) </button>
    <button>Notifcation ({notificationCount.notification}) </button>
    <button>Messaging ({notificationCount.messaging}) </button>

    <button>Home ({totalNotification}) </button>
  </div>
}

export default App