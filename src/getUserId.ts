import { Elysia } from "elysia";

import { userService } from "./userService";

export const getUserId = new Elysia()
    .use(userService)
    .guard({
        isSignIn: true,
        cookie: 'session'
    })
    .resolve(
        ({ store: { session }, cookie: { token } }) => ({
            username: session[token.value]
        })
    )
    .as('scoped') 