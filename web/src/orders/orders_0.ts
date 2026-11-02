// Synthetic test code for indexing (orders, file 0).

export interface InvoiceRecord0 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateInvoice0_0(records: InvoiceRecord0[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatInvoice0_1(records: InvoiceRecord0[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadInvoice0_2(records: InvoiceRecord0[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateInvoice0_3(records: InvoiceRecord0[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleInvoice0_4(records: InvoiceRecord0[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitInvoice0_5(records: InvoiceRecord0[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoiceOrdersService0 {
  private cache = new Map<string, InvoiceRecord0>();

  summarizeInvoice0(record: InvoiceRecord0): InvoiceRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveInvoice1(record: InvoiceRecord0): InvoiceRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  scheduleInvoice2(record: InvoiceRecord0): InvoiceRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  saveInvoice3(record: InvoiceRecord0): InvoiceRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeInvoice4(record: InvoiceRecord0): InvoiceRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeInvoice5(record: InvoiceRecord0): InvoiceRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
