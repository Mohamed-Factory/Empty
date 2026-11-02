// Synthetic test code for indexing (auth, file 31).

export interface InvoiceRecord31 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryInvoice31_0(records: InvoiceRecord31[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeInvoice31_1(records: InvoiceRecord31[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveInvoice31_2(records: InvoiceRecord31[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeInvoice31_3(records: InvoiceRecord31[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitInvoice31_4(records: InvoiceRecord31[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryInvoice31_5(records: InvoiceRecord31[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoiceAuthService31 {
  private cache = new Map<string, InvoiceRecord31>();

  normalizeInvoice0(record: InvoiceRecord31): InvoiceRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  loadInvoice1(record: InvoiceRecord31): InvoiceRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  validateInvoice2(record: InvoiceRecord31): InvoiceRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  formatInvoice3(record: InvoiceRecord31): InvoiceRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  formatInvoice4(record: InvoiceRecord31): InvoiceRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  loadInvoice5(record: InvoiceRecord31): InvoiceRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
