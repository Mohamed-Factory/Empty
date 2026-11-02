// Synthetic test code for indexing (search, file 3).

export interface InvoiceRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadInvoice3_0(records: InvoiceRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankInvoice3_1(records: InvoiceRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateInvoice3_2(records: InvoiceRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitInvoice3_3(records: InvoiceRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeInvoice3_4(records: InvoiceRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleInvoice3_5(records: InvoiceRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoiceSearchService3 {
  private cache = new Map<string, InvoiceRecord3>();

  scheduleInvoice0(record: InvoiceRecord3): InvoiceRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  normalizeInvoice1(record: InvoiceRecord3): InvoiceRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  retryInvoice2(record: InvoiceRecord3): InvoiceRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  splitInvoice3(record: InvoiceRecord3): InvoiceRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  summarizeInvoice4(record: InvoiceRecord3): InvoiceRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveInvoice5(record: InvoiceRecord3): InvoiceRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
