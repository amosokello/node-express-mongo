import Bill from '../resources/bill/bill.interface';
import mongoose from 'mongoose';

import {
    addNewBill,
    getAllBills,
    connectDb
} from './mongo'

describe('MongoDB service', () => {
    let mongoClient: typeof mongoose;
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

    const bill: Partial<Bill> = {
        amount: 330,
        customerType: "employee"
    }

    beforeAll(async () => {
        mongoClient = await connectDb(
            process.env.MONGO_URL as string
        );
    });

    afterAll(async () => {
        await mongoClient.connection.close();
    });

    afterEach(async ()=> {
        await mongoClient.connection.db.dropDatabase();
    });

    describe('Bills', () => {
        test('Add a new bills and get all bills', async () => {
            await addNewBill(bill);
            await addNewBill(bill);

            let bills = await getAllBills();

            expect(bills.length).toBe(2);
        })
    })

})