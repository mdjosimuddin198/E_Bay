import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // 1️⃣ Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 2️⃣ Credentials
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const { email, password } = credentials ?? {};

    //     // ডেমো ইউজার (পরে ডাটাবেস দিয়ে replace করো)
    //     if (email === "josim@example.com" && password === "123456") {
    //       return { id: "1", name: "Josim", email };
    //     }

    //     return null; // Invalid credentials
    //   },
    // }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url === "/") return baseUrl; // logout → home
      return "/products"; // login → products
    },
  },

  pages: {
    signIn: "/login", // অনঅথ হলে redirect করবে login page এ
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
