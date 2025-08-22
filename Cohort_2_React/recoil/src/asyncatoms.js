import { atom, selector } from "recoil";
import axios from "axios"


export const notifications = atom({
    key: "notifications", 
    default: selector({
        key: "notification", 
        get: async () => {
            const res = await axios.get("https://my.api.mockaroo.com/recoil.json?key=94f9efb0")
            return res.data
        }
    })
})


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const totalNotificationCount = get(notifications)
        return totalNotificationCount.network + 
        totalNotificationCount.jobs +
        totalNotificationCount.notification +
        totalNotificationCount.messaging
    }
})