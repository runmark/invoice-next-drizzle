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