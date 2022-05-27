import BillModel from '@/resources/bill/bill.model';
import Bill from '@/resources/bill/bill.interface';

class BillService {
    private bill = BillModel;

    // Create a new bill
    public async create(amount: number, customerType: string, groceries: boolean, discount: number): Promise<Bill> {
        try {
            const bill = await this.bill.create({ amount, customerType, groceries, discount });

            return bill;
        } catch (error) {
            throw new Error('Unable to create bill');
        }
    }

    // List all bills
    public async getall(): Promise<Bill[]> {
        try {
            const bills = await this.bill.find();

            return bills;
        } catch (error) {
            throw new Error('Did not find bills');
        }
    }
}

export default BillService;