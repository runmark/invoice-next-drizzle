import db from "./drizzle";

export const getInvoices = async () => {
    return await db.query.invoices.findMany();
};

