import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credential',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const adminId = process.env.ADMIN_ID
                const adminPsw = process.env.ADMIN_PSW

                if (credentials?.username === adminId && credentials?.password === adminPsw) {
                  return {
                    id: "1011",
                    name: "Chanchal Roy",
                    email: adminId
                  };
                } else return null;
            }
        })
    ],
    pages: {
        signIn: '/auth/sign-in'
    },
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60
    },
    jwt: {
        maxAge: 24 * 60 * 60
    },
    secret: process.env.AUTH_SECRET
}

export default authOptions