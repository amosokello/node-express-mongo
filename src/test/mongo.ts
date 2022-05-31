import mongoose from 'mongoose';
import Bill from '../resources/bill/bill.interface';
import BillModel from '../resources/bill/bill.model';

// let bill = BillModel;

export async function connectDb(mongoUrl: string) {
    return await mongoose.connect(mongoUrl)
}

export async function addNewBill(bill: Partial<Bill>) {
    const newBill = new BillModel({ amount: 330, customerType: "employee"});
    return await newBill.save();
}

export async function getAllBills() {
    return await BillModel.find();
}