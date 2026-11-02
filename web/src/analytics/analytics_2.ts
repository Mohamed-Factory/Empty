// Synthetic test code for indexing (analytics, file 2).

export interface ProductRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterProduct2_0(records: ProductRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatProduct2_1(records: ProductRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterProduct2_2(records: ProductRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadProduct2_3(records: ProductRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryProduct2_4(records: ProductRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateProduct2_5(records: ProductRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAnalyticsService2 {
  private cache = new Map<string, ProductRecord2>();

  validateProduct0(record: ProductRecord2): ProductRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  summarizeProduct1(record: ProductRecord2): ProductRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  formatProduct2(record: ProductRecord2): ProductRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  loadProduct3(record: ProductRecord2): ProductRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  computeProduct4(record: ProductRecord2): ProductRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  mergeProduct5(record: ProductRecord2): ProductRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
