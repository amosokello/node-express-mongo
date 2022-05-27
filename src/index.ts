import 'dotenv/config';
import 'module-alias/register';
import App from './app';
import validateEnv from '@/utils/validateEnv';
import BillController from '@/resources/bill/bill.controller';

validateEnv()

const app = new App([new BillController], Number(process.env.PORT));

app.listen();
