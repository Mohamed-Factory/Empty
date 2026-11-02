// Synthetic test code for indexing (payments, file 24).

export interface InvoiceRecord24 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveInvoice24_0(records: InvoiceRecord24[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeInvoice24_1(records: InvoiceRecord24[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveInvoice24_2(records: InvoiceRecord24[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportInvoice24_3(records: InvoiceRecord24[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryInvoice24_4(records: InvoiceRecord24[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitInvoice24_5(records: InvoiceRecord24[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoicePaymentsService24 {
  private cache = new Map<string, InvoiceRecord24>();

  scheduleInvoice0(record: InvoiceRecord24): InvoiceRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  formatInvoice1(record: InvoiceRecord24): InvoiceRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  formatInvoice2(record: InvoiceRecord24): InvoiceRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  mergeInvoice3(record: InvoiceRecord24): InvoiceRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  retryInvoice4(record: InvoiceRecord24): InvoiceRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  mergeInvoice5(record: InvoiceRecord24): InvoiceRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
