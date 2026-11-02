// Synthetic test code for indexing (accounts, file 8).

export interface InvoiceRecord8 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryInvoice8_0(records: InvoiceRecord8[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportInvoice8_1(records: InvoiceRecord8[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeInvoice8_2(records: InvoiceRecord8[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadInvoice8_3(records: InvoiceRecord8[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportInvoice8_4(records: InvoiceRecord8[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeInvoice8_5(records: InvoiceRecord8[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoiceAccountsService8 {
  private cache = new Map<string, InvoiceRecord8>();

  mergeInvoice0(record: InvoiceRecord8): InvoiceRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  filterInvoice1(record: InvoiceRecord8): InvoiceRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  mergeInvoice2(record: InvoiceRecord8): InvoiceRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  normalizeInvoice3(record: InvoiceRecord8): InvoiceRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterInvoice4(record: InvoiceRecord8): InvoiceRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  exportInvoice5(record: InvoiceRecord8): InvoiceRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
