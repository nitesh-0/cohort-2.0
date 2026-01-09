"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export function AppBar(){
    const session = useSession()

    return <div>
        <button className=" mr-2 bg-red-500 cursor-pointer" onClick={() => {
            signIn()
        }}>Sign in</button>

        <button className=" bg-red-500 cursor-pointer" onClick={() => {
            signOut()
        }}>Sign out</button>

        <div>
            {JSON.stringify(session)}
        </div>
    </div>
}



// "use client"

// import { useRouter } from "next/navigation"

// export function AppBar(){
//     const router = useRouter();

//     return <div>
//         <button className=" bg-red-500 cursor-pointer" onClick={() => {
//             router.push("/api/auth/signin")
//         }}>SIgn in</button>
//     </div>
// }