import { atom, selector } from "recoil";


export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})
export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 12
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 0
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkSelector = get(networkAtom)
        const jobSelector = get(jobAtom)
        const messagingSelector = get(messagingAtom)
        const notificationSelector = get(notificationAtom)
        return networkSelector + jobSelector + messagingSelector + notificationSelector
    }
})