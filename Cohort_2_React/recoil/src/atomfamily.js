import { atomFamily } from "recoil";
import { Todos } from "./todos";


export const todoAtom = atomFamily({
    key: "todoAtom",
    default: (id) => {
        return Todos.find(x => x.id === id)
    }
})