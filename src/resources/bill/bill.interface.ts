import { Document } from "mongoose";

export default interface Bill extends Document {
    id: number;
    amount: number;
    customerType: string;
    groceries: boolean;
    discount: number;
    netPay: number;
}