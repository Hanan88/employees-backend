import Elysia, { t } from "elysia";

export const userService = new Elysia({ prefix: '/user/service' })
    .state({
        user: {} as Record<string, string>,
        session: {} as Record<number, string>
    })
    .model({
        signIn: t.Object({
            username: t.String({ minLength: 3 }),
            password: t.String({ minLength: 8 })
        }),
        session: t.Cookie(
            {
                token: t.Number()
            },
            {
                secrets: 'seia'
            }
        ),
        optionalSession: t.Cookie(
            {
                token: t.Optional(t.Number())
            },
            {
                secrets: 'seia'
            }
        )
    })
    .macro({
        isSignIn(enabled: boolean) {
            if (!enabled) return

            return {
                beforeHandle({
                    status,
                    cookie: { token },
                    store: { session }
                }) {
                    if (!token.value)
                        return status(401, {
                            success: false,
                            message: 'Unauthorized'
                        })

                    const username = session[token.value as unknown as number]

                    if (!username)
                        return status(401, {
                            success: false,
                            message: 'Unauthorized'
                        })
                }
            }
        }
    }) 