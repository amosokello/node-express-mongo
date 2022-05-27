function calculateDiscount(amount: number, customerType: string, groceries: boolean): number {
    let discount: number = 0;

    if (groceries){
        discount = (Math.trunc(amount/100)) * 5;
    }
    else {
        if(customerType == "employee"){
            discount = ((Math.trunc(amount/100)) * 5) + (0.3 * amount);
        }
        if(customerType == "affiliate"){
            discount = ((Math.trunc(amount/100)) * 5) + (0.1 * amount);
        }
        if(customerType == "twoyear"){
            discount = ((Math.trunc(amount/100)) * 5) + (0.05 * amount);
        }
    }

    return discount;
}

export default calculateDiscount;