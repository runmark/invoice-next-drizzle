import { date, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const invoices = pgTable('invoices', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    senderEmail: text('sender_email').notNull(),
    recipientEmail: text('recipient_email').notNull(),
    date: date('date').notNull(),
    dueDate: date('due_date').notNull(),
    shippingAddress: text('shipping_address'),
    invoiceNote: text('invoice_note'),
    description: text('description'),
    qty: integer('qty'),
    rate: integer('rate'),
    total: integer('total'),
});

