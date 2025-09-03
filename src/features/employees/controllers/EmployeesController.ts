import { Elysia } from "elysia";

import db from "../../../knexfile"; 

export const employeesController = new Elysia({ prefix: "/employees" })
    // Get all employees
    .get("/", async () => {
        const employees = await db("employees").select("*");
        return employees;
    });
