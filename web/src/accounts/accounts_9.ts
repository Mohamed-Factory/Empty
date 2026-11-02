// Synthetic test code for indexing (accounts, file 9).

export interface ProductRecord9 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeProduct9_0(records: ProductRecord9[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateProduct9_1(records: ProductRecord9[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryProduct9_2(records: ProductRecord9[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeProduct9_3(records: ProductRecord9[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatProduct9_4(records: ProductRecord9[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitProduct9_5(records: ProductRecord9[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAccountsService9 {
  private cache = new Map<string, ProductRecord9>();

  computeProduct0(record: ProductRecord9): ProductRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  retryProduct1(record: ProductRecord9): ProductRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  filterProduct2(record: ProductRecord9): ProductRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  validateProduct3(record: ProductRecord9): ProductRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  loadProduct4(record: ProductRecord9): ProductRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  summarizeProduct5(record: ProductRecord9): ProductRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
