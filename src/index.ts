import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

import { note } from './note'
import { user } from './user'

const app = new Elysia()
    .use(swagger())

    .use(user)
    
    .use(note) 

    .listen(3000)