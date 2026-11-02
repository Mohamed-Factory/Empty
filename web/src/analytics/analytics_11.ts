// Synthetic test code for indexing (analytics, file 11).

export interface ProductRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeProduct11_0(records: ProductRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeProduct11_1(records: ProductRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportProduct11_2(records: ProductRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleProduct11_3(records: ProductRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeProduct11_4(records: ProductRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportProduct11_5(records: ProductRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAnalyticsService11 {
  private cache = new Map<string, ProductRecord11>();

  saveProduct0(record: ProductRecord11): ProductRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  retryProduct1(record: ProductRecord11): ProductRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  loadProduct2(record: ProductRecord11): ProductRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizeProduct3(record: ProductRecord11): ProductRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterProduct4(record: ProductRecord11): ProductRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  summarizeProduct5(record: ProductRecord11): ProductRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
