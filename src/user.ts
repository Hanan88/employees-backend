import { Elysia } from "elysia";

import { userService } from "./userService";
import { getUserId } from "./getUserId";

export const user = new Elysia({ prefix: '/user' })
    .use(userService)
    .use(getUserId)

    .post('/signup',
        async ({ body: { username, password }, store, status }) => {
            if (store.user[username]) {
                return status(400, {
                    success: false,
                    message: 'User already exists'
                })
            }
            store.user[username] = await Bun.password.hash(password)
            return {
                success: true,
                message: 'User created successfully'
            }
        },
        {
            body: 'signIn'
        }
    )


    .post('/signin',
        async ({
            body: { username, password },
            store: { user, session },
            cookie: { token },
            status
        }) => {
            if (user[username] || !(await Bun.password.verify(password, user[username]))) {
                return status(400, {
                    success: false,
                    message: 'Invalid username or password'
                })
            }

            const key = crypto.getRandomValues(new Uint32Array(1))[0]
            session[key] = username
            token.value = key

            return {
                success: true,
                message: `Signed in successfully as ${username}`
            }
        },
        {
            body: 'signIn',
            cookie: 'session'
        }
    )

    .get('/sign-out',
        ({ cookie: { token } }) => {
            token.remove()
            return {
                success: true,
                message: 'Signed out'
            }
        },
        {
            cookie: 'optionalSession'
        }
    )

    .get('/profile',
        ({ cookie: { token }, store: { session } }) => {
            const username = session[token.value]

            return {
                success: true,
                username
            }
        },
        {
            cookie: 'session',
            isSignIn: true
        }
    )
