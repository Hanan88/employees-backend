import { Elysia } from "elysia";
import db from "../../../knexfile";


export const employeesController = new Elysia({ prefix: "/employees" })
    // Get all employees
    .get("/", async () => {
        const employees = await db("employees").select("*");
        return employees;
    })

    //Get employee by id
    .get("/:id", async ({ params: { id } }) => {
        const employee = await db("employees").where("id", id).first();
        return employee;
    });

//Create employee
// .post("/", async ({ body }) => {
//     const employee = await db("employees").insert(body);
//     return employee;
// });