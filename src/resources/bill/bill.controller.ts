import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/bill/bill.validation';
import BillService from '@/resources/bill/bill.service';
import calculateDiscount from "@/utils/discounter";

class BillController implements Controller {
    public path = '/bills';
    public router = Router();
    private BillService = new BillService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );

        this.router.get(
            `${this.path}`,
            this.getall
        );
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { amount, customerType, groceries } = req.body;

            const discount = calculateDiscount(amount, customerType, groceries);

            const bill = await this.BillService.create(amount, customerType, groceries, discount);

            res.status(201).json({ bill });
        } catch (error) {
            next(new HttpException(400, 'Cannot post bill'));
        }
    }

    private getall = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const bills = await this.BillService.getall();

            res.status(200).json(bills);
        } catch (error) {
            next(new HttpException(404, 'No bills found'));
        }
    }
}

export default BillController;