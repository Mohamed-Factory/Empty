// Synthetic test code for indexing (catalog, file 19).

export interface InvoiceRecord19 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveInvoice19_0(records: InvoiceRecord19[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitInvoice19_1(records: InvoiceRecord19[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeInvoice19_2(records: InvoiceRecord19[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitInvoice19_3(records: InvoiceRecord19[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveInvoice19_4(records: InvoiceRecord19[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryInvoice19_5(records: InvoiceRecord19[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoiceCatalogService19 {
  private cache = new Map<string, InvoiceRecord19>();

  saveInvoice0(record: InvoiceRecord19): InvoiceRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  validateInvoice1(record: InvoiceRecord19): InvoiceRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  summarizeInvoice2(record: InvoiceRecord19): InvoiceRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  scheduleInvoice3(record: InvoiceRecord19): InvoiceRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  formatInvoice4(record: InvoiceRecord19): InvoiceRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  filterInvoice5(record: InvoiceRecord19): InvoiceRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
