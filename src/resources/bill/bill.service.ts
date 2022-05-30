import BillModel from '@/resources/bill/bill.model';
import Bill from '@/resources/bill/bill.interface';

class BillService {
    private bill = BillModel;

    // Create a new bill
    public async create(amount: number, customerType: string, groceries: boolean, netPay: number): Promise<Bill> {
        try {
            const bill = await this.bill.create({amount, customerType, groceries, netPay });

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

    // Get single bill
    public async getBill(id: number): Promise<Bill | any> {
        try {
            const bill = await this.bill.findById({ _id: id }).exec();

            return bill;
        } catch (error) {
            throw new Error('Unable to post discount');
        }
    }

    // Add discount to bill
    public async updateDiscount(id: number, discount: number, netPay: number): Promise<Bill | any> {
        try {
            const bill = await this.bill.updateOne({_id: id}, { discount: discount, netPay: netPay });

            return bill;
        } catch (error) {
            throw new Error('Unable to update discount');
        }
    }
}

export default BillService;