import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil"
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"


import React from "react";
import * as ReactDOM from "react-dom/client";
console.log("React:", React.version);
console.log("ReactDOM:", ReactDOM.version);


function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp(){
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobAtom)
  const [messagingCount, setMessagignCount] = useRecoilState(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
    <button>Home</button>

    <button>My Network ({networkCount >= 100 ? "99+" : networkCount}) </button>
    <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount}) </button>
    <button>Messaging ({messagingCount >= 100 ? "99+" : messagingCount}) </button>
    <button>Notifications ({notificationCount >= 100 ? "99+" : notificationCount})</button>

    <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App