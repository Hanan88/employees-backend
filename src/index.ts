import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

import EmployeesRoute from './features/employees/routes/EmployeesRoute'

const app = new Elysia()
    .use(swagger())

    .use(EmployeesRoute)

    .listen(3000)