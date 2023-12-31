// // import { gql } from 'graphql-tag'

// import { LocalScheme } from '~auth/runtime'

// export const LOGIN_MUTATION = gql`
//   mutation userLogin($email: String!, $password: String!) {
//     userLogin(email: $email, password: $password) {
//       jwt,
//       user {
//         id
//         firstName
//         lastName
//         email
//         accountBalance
//         tradingBalance
//         profit
//         walletAddress
//         timeAdded
//       }
//     }
//   }
// `;

// export const REGISTER_MUTATION = gql`
//   mutation newUser(
//     $email: String!
//     $password: String!
//     $firstName: String!
//     $lastName: String!
//   ) {
//     newUser(
//       input: {
//         email: $email
//         password: $password
//         firstName: $firstName
//         lastName: $lastName
//       }
//     ) {
//       jwt,
//       user {
//         id
//         firstName
//         lastName
//         email
//         accountBalance
//         tradingBalance
//         profit
//         walletAddress
//         timeAdded
//       }
//     }
//   }
// `;

// export const LOGOUT_MUTATION = gql`
//   mutation LogOutMutation {
//     logOut
//   }
// `

// export const USER_DETAILS_QUERY = gql`
//   query getUser {
//     User {
//       id
//       firstName
//       lastName
//       email
//       accountBalance
//       tradingBalance
//       profit
//       walletAddress
//       timeAdded
//     }
//   }
// `;

// export default class GraphQLScheme extends LocalScheme {
//   async login (credentials, { reset = true } = {}) {
//     const {
//       apolloProvider: { defaultClient: apolloClient },
//       $apolloHelpers
//     } = this.$auth.ctx.app

//     // Ditch any leftover local tokens before attempting to log in
//     if (reset) {
//       this.$auth.reset({ resetInterceptor: false })
//     }

//     // Make login request
//     const response = await apolloClient
//       .mutate({
//         mutation: LOGIN_MUTATION,
//         variables: credentials
//       })
//       .then(({ data }) => data && data.logIn)

//     this.token.set(response.token)

//     // Set your graphql-token
//     await $apolloHelpers.onLogin(response.token)

//     // Fetch user
//     await this.fetchUser()

//     // Update tokens
//     return response.token
//   }

//   async register (credentials, { reset = true } = {}) {
//     const {
//       apolloProvider: { defaultClient: apolloClient },
//       $apolloHelpers
//     } = this.$auth.ctx.app

//     // Ditch any leftover local tokens before attempting to log in
//     if (reset) {
//       this.$auth.reset({ resetInterceptor: false })
//     }

//     // Make login request
//     const response = await apolloClient
//       .mutate({
//         mutation: REGISTER_MUTATION,
//         variables: credentials
//       })
//       .then(({ data }) => data && data.logIn)

//     this.token.set(response.token)

//     // Set your graphql-token
//     await $apolloHelpers.onLogin(response.token)

//     // Fetch user
//     await this.fetchUser()

//     // Update tokens
//     return response.token
//   }

//   fetchUser () {
//     const {
//       apolloProvider: { defaultClient: apolloClient }
//     } = this.$auth.ctx.app

//     // Token is required but not available
//     if (!this.check().valid) {
//       return
//     }

//     // Try to fetch user
//     return apolloClient
//       .query({
//         query: USER_DETAILS_QUERY
//       })
//       .then(({ data }) => {
//         if (!data.me) {
//           const error = new Error('User Data response not resolved')
//           return Promise.reject(error)
//         }

//         this.$auth.setUser(data.me)

//         return data.me
//       })
//       .catch((error) => {
//         this.$auth.callOnError(error, { method: 'fetchUser' })
//         return Promise.reject(error)
//       })
//   }

//   async logout () {
//     const {
//       apolloProvider: { defaultClient: apolloClient },
//       $apolloHelpers
//     } = this.$auth.ctx.app

//     await apolloClient
//       .mutate({
//         mutation: LOGOUT_MUTATION
//       })
//       .catch(() => {
//         // Handle errors
//       })

//     // But reset regardless
//     $apolloHelpers.onLogout()
//     return this.$auth.reset({ resetInterceptor: false })
//   }

//   initializeRequestInterceptor () {
//     // Instead of initializing axios interceptors, Do nothing
//     // Since we are not using axios
//   }

//   reset () {
//     this.$auth.setUser(false)
//     this.token.reset()
//   }
// }
