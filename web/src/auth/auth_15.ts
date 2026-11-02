// Synthetic test code for indexing (auth, file 15).

export interface ProductRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeProduct15_0(records: ProductRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankProduct15_1(records: ProductRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleProduct15_2(records: ProductRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeProduct15_3(records: ProductRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankProduct15_4(records: ProductRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryProduct15_5(records: ProductRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAuthService15 {
  private cache = new Map<string, ProductRecord15>();

  saveProduct0(record: ProductRecord15): ProductRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  scheduleProduct1(record: ProductRecord15): ProductRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  scheduleProduct2(record: ProductRecord15): ProductRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  mergeProduct3(record: ProductRecord15): ProductRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  loadProduct4(record: ProductRecord15): ProductRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  splitProduct5(record: ProductRecord15): ProductRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
