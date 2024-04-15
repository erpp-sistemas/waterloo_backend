import { Request, Response } from "express";
import { prisma } from "../../data/sqlserver";
import { CreateTodoDto, UpdateTodoDto } from "../../domains/dtos";
import { TodoRepository } from "../../domains";


export class TodosController {

    //* DI
    constructor(
        private readonly todoRepository: TodoRepository
    ) { }

    public getTodos = async (req: Request, res: Response) => {

        const todos = await this.todoRepository.getAll()
        res.json(todos)

    }


    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

        try {
            const todo = await this.todoRepository.findById(id)
            res.json(todo)
        } catch (error) {
            res.status(400).json({ error })
        }

    }

    public createTodo = async (req: Request, res: Response) => {

        const [error, createTodoDto] = CreateTodoDto.create(req.body)
        if (error) return res.status(400).json({ error: error });

        try {
            const newTodo = await this.todoRepository.create(createTodoDto!)
            res.json(newTodo)
        } catch (error) {
            res.status(400).json({ error })
        }

    }


    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id

        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id })
        if (error) return res.status(400).json({ error: error });

        try {
            const updateTodo = await this.todoRepository.updateById(updateTodoDto!)
            res.json(updateTodo)
        } catch (error) {
            res.status(400).json({ error })
        }

    }


    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id
        if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });

        try {
            const deleteTodo = await this.todoRepository.deleteById(id)
            res.json(deleteTodo)
        } catch (error) {
            res.status(400).json({ error })
        }

    }



}