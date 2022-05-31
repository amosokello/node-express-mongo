import { Schema, model } from "mongoose";
import Bill from '@/resources/bill/bill.interface';

const BillSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true,
        },

        customerType: {
            type: String,
            required: true,
        },

        groceries: {
            type: Boolean,
            required: false,
        },

        discount: {
            type: Number,
            required: false,
        },

        netPay: {
            type: Number,
            required: false,
        },
    },
    {
        timestamps: true
    }
);

export default model<Bill>('Bills', BillSchema);