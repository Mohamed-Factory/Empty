// Synthetic test code for indexing (search, file 11).

export interface InvoiceRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleInvoice11_0(records: InvoiceRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankInvoice11_1(records: InvoiceRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeInvoice11_2(records: InvoiceRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterInvoice11_3(records: InvoiceRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatInvoice11_4(records: InvoiceRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankInvoice11_5(records: InvoiceRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoiceSearchService11 {
  private cache = new Map<string, InvoiceRecord11>();

  summarizeInvoice0(record: InvoiceRecord11): InvoiceRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  normalizeInvoice1(record: InvoiceRecord11): InvoiceRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  loadInvoice2(record: InvoiceRecord11): InvoiceRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  splitInvoice3(record: InvoiceRecord11): InvoiceRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  rankInvoice4(record: InvoiceRecord11): InvoiceRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  rankInvoice5(record: InvoiceRecord11): InvoiceRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
