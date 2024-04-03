
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
        email: {
        label: "email:",
        type: "text",
        },
        password: {
        label: "password:",
        type: "password",
        },
        },
        async authorize(credentials) {
        try {
        const res = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email: credentials?.email,
        password: credentials?.password,
        }),
        });
        const response = await res.json();
        console.log(response)
        if (response.success===false) {
        throw new Error("Invalid credentials");
        }
        if (response.user) { console.log(response.user)
        return { ...response.user, password: null, role:
        response.user.role , image: response.user.avatar};
        } else {
        return null;
    }
} catch (error) {
console.log(error);
}
return null;
},
}),
GitHubProvider({
clientId: "5572351571798254ec88",
clientSecret: "23a314d64c71428d3f9829f72c3b97f88491340d",
}),
GoogleProvider({
clientId: "1087727389831-fcm3u2iu93cv1drii869qu9iu0gugmgr.apps.googleusercontent.com",
clientSecret: "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"
})
],
secret: process.env.SECRET,
callbacks: {
async jwt({ token, user }) {
if (user){
token.role = user.role;
token.image = user.image;
}
return token;
},
async session({ session, token }) {
if (session?.user) {
session.user.role = token.role;
session.user.image = token.image;
}
return session;
},
},
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }