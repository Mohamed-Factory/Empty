// Synthetic test code for indexing (accounts, file 36).

export interface ProductRecord36 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleProduct36_0(records: ProductRecord36[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterProduct36_1(records: ProductRecord36[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeProduct36_2(records: ProductRecord36[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeProduct36_3(records: ProductRecord36[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeProduct36_4(records: ProductRecord36[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadProduct36_5(records: ProductRecord36[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAccountsService36 {
  private cache = new Map<string, ProductRecord36>();

  validateProduct0(record: ProductRecord36): ProductRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  loadProduct1(record: ProductRecord36): ProductRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  summarizeProduct2(record: ProductRecord36): ProductRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  loadProduct3(record: ProductRecord36): ProductRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  validateProduct4(record: ProductRecord36): ProductRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  saveProduct5(record: ProductRecord36): ProductRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
