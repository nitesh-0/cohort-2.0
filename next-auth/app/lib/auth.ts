import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "email", type: "text", placeholder: "johndoe123@gmail.com" },
                password: { label: "password", type: "password", placeholder: "123456" }
            },

            async authorize(credentials: any) {
                console.log(credentials)
            
                return {
                    id: "1",
                    name: "Harkirat Singh",
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({token, user}: any) => {
            console.log('token: ', token)
            return token
        },

        session: ({session, token, user}: any) => {
            if(session && session.user){
            session.user.id = token.sub
            }
            console.log("session: ", session)
            return session
        }
    },

    pages: {
        signIn: "/signin"
    }

}