import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

import EmployeesRoute from './features/employees/routes/EmployeesRoute'
import { cors } from '@elysiajs/cors';

const app = new Elysia()
    .use(cors())
    .use(swagger())
    .use(EmployeesRoute)

    .listen(3000)