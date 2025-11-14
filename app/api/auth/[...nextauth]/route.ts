import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const adminUser = process.env.ADMIN_USER;
                const adminPass = process.env.ADMIN_PASS;

                if (
                    credentials?.username === adminUser &&
                    credentials?.password === adminPass
                ) {
                    return { id: "admin", name: "Administrator" };
                }

                return null;
            }
        })
    ],
    session: {
        strategy: "jwt" as const
    },
    pages: {
        signIn: "/admin/sign-in"
    },
    secret: process.env.AUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
