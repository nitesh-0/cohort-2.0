import CredentialsProvider from 'next-auth/providers/credentials';


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
                    id: "user1",
                    name: "Harkirat Singh",
                    email: "nitesh760@gmail.com"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({token, user}: any) => {
            console.log(token)
            const subb = token.sub
            const userId = subb?.slice(-1)
            console.log("userId", userId)
            return token
        },

        session: ({session, token, user}: any) => {
            if(session && session.user){
            session.user.id = token.sub.slice(-1)
            }
            return session
        }
    }

}