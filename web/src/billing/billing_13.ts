// Synthetic test code for indexing (billing, file 13).

export interface ProductRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeProduct13_0(records: ProductRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportProduct13_1(records: ProductRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadProduct13_2(records: ProductRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankProduct13_3(records: ProductRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleProduct13_4(records: ProductRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveProduct13_5(records: ProductRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductBillingService13 {
  private cache = new Map<string, ProductRecord13>();

  rankProduct0(record: ProductRecord13): ProductRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizeProduct1(record: ProductRecord13): ProductRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  retryProduct2(record: ProductRecord13): ProductRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  formatProduct3(record: ProductRecord13): ProductRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  retryProduct4(record: ProductRecord13): ProductRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  rankProduct5(record: ProductRecord13): ProductRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
