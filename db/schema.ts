import { date, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const invoice = pgTable('invoice', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    senderEmail: text('email').notNull(),
    recipientEmail: text('email').notNull(),
    date: date('date').notNull(),
    dueDate: date('date').notNull(),
    shippingAddress: text('shipping_address'),
    invoiceNote: text('invoice_note'),
    description: text('description'),
    qty: integer('qty'),
    rate: integer('rate'),
    total: integer('total'),
});

