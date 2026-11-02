// Synthetic test code for indexing (payments, file 10).

export interface InvoiceRecord10 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeInvoice10_0(records: InvoiceRecord10[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadInvoice10_1(records: InvoiceRecord10[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeInvoice10_2(records: InvoiceRecord10[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeInvoice10_3(records: InvoiceRecord10[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryInvoice10_4(records: InvoiceRecord10[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateInvoice10_5(records: InvoiceRecord10[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoicePaymentsService10 {
  private cache = new Map<string, InvoiceRecord10>();

  computeInvoice0(record: InvoiceRecord10): InvoiceRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  exportInvoice1(record: InvoiceRecord10): InvoiceRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  mergeInvoice2(record: InvoiceRecord10): InvoiceRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  saveInvoice3(record: InvoiceRecord10): InvoiceRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeInvoice4(record: InvoiceRecord10): InvoiceRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  loadInvoice5(record: InvoiceRecord10): InvoiceRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
