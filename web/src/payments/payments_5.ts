// Synthetic test code for indexing (payments, file 5).

export interface InvoiceRecord5 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function rankInvoice5_0(records: InvoiceRecord5[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterInvoice5_1(records: InvoiceRecord5[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportInvoice5_2(records: InvoiceRecord5[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveInvoice5_3(records: InvoiceRecord5[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveInvoice5_4(records: InvoiceRecord5[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeInvoice5_5(records: InvoiceRecord5[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoicePaymentsService5 {
  private cache = new Map<string, InvoiceRecord5>();

  filterInvoice0(record: InvoiceRecord5): InvoiceRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  saveInvoice1(record: InvoiceRecord5): InvoiceRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveInvoice2(record: InvoiceRecord5): InvoiceRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  validateInvoice3(record: InvoiceRecord5): InvoiceRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  formatInvoice4(record: InvoiceRecord5): InvoiceRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  formatInvoice5(record: InvoiceRecord5): InvoiceRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
