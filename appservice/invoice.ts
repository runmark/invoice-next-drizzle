'use server';

import { eq } from "drizzle-orm";
import db from "../db/drizzle";
import { getInvoices } from "../db/queries";
import { invoices } from "../db/schema";

export const fetchInvoices = async () => {
    const invoices = await getInvoices();
    return invoices;
};

export const deleteInvoice = async (invoiceId: number) => {
    await db.delete(invoices).where(eq(invoices.id, invoiceId));
};

type InvoiceToCreate = typeof invoices.$inferInsert;
export const addInovice = async (invoice: InvoiceToCreate) => {
    return await db.insert(invoices).values([
        invoice
    ]).returning();
};

type InvoiceToEdit = typeof invoices.$inferSelect;
export const editInvoice = async (invoice: InvoiceToEdit) => {
    const { id, ...fieldsToUpdate } = invoice;

    await db.update(invoices)
        .set(fieldsToUpdate)
        .where(eq(invoices.id, invoice.id));
}