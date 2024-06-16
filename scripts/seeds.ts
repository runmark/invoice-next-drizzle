// import db from "@/db/drizzle";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from '@/db/schema';

require('dotenv').config({ path: ['.env.local', '.env'] });

const sql = neon(process.env.DB_URL!);
const db = drizzle(sql, { schema });

const main = async () => {


    try {
        await db.delete(schema.invoices);

        await db.insert(schema.invoices).values([
            {
                id: 1,
                name: 'mark',
                senderEmail: 'mark@173.com',
                recipientEmail: 'yan@173.com',
                date: '2024-06-15',
                dueDate: '2024-07-14',
                shippingAddress: 'zhongjianpinzhi',
                invoiceNote: 'note xxxxxx',
                description: 'description xxxxx',
                qty: 300,
                rate: 2,
                total: 700,
            },
            {
                id: 2,
                name: 'mark2',
                senderEmail: 'mark2@173.com',
                recipientEmail: 'yan@173.com',
                date: '2024-06-15',
                dueDate: '2024-07-14',
                shippingAddress: 'zhongjianpinzhi',
                invoiceNote: 'note xxxxxx',
                description: 'description xxxxx',
                qty: 300,
                rate: 2,
                total: 700,
            },
        ]);
    } catch (err) {
        console.log(err);
        throw new Error('Failed to seed db');
    }

};

main();