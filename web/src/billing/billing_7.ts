// Synthetic test code for indexing (billing, file 7).

export interface ProductRecord7 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleProduct7_0(records: ProductRecord7[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankProduct7_1(records: ProductRecord7[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankProduct7_2(records: ProductRecord7[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveProduct7_3(records: ProductRecord7[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterProduct7_4(records: ProductRecord7[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankProduct7_5(records: ProductRecord7[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductBillingService7 {
  private cache = new Map<string, ProductRecord7>();

  validateProduct0(record: ProductRecord7): ProductRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  summarizeProduct1(record: ProductRecord7): ProductRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  scheduleProduct2(record: ProductRecord7): ProductRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  computeProduct3(record: ProductRecord7): ProductRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  validateProduct4(record: ProductRecord7): ProductRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  normalizeProduct5(record: ProductRecord7): ProductRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
