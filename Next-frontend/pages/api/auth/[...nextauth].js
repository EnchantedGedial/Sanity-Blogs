import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
 
  providers: [
    GithubProvider({
      clientId:'Iv1.3489530b60399a5c',
      clientSecret: 'ce8dd9f3ae2a9fd476eede023268e8195c68ac3d',
    }),
    GoogleProvider({
      clientId:'738492238224-1aaco14prjc94m4be2ofk4a5qnus0j7i.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)