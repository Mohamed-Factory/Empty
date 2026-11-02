// Synthetic test code for indexing (shipping, file 13).

export interface InvoiceRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitInvoice13_0(records: InvoiceRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadInvoice13_1(records: InvoiceRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateInvoice13_2(records: InvoiceRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportInvoice13_3(records: InvoiceRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterInvoice13_4(records: InvoiceRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryInvoice13_5(records: InvoiceRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class InvoiceShippingService13 {
  private cache = new Map<string, InvoiceRecord13>();

  computeInvoice0(record: InvoiceRecord13): InvoiceRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  exportInvoice1(record: InvoiceRecord13): InvoiceRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  computeInvoice2(record: InvoiceRecord13): InvoiceRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankInvoice3(record: InvoiceRecord13): InvoiceRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  computeInvoice4(record: InvoiceRecord13): InvoiceRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankInvoice5(record: InvoiceRecord13): InvoiceRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
