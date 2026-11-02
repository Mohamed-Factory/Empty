// Synthetic test code for indexing (accounts, file 24).

export interface ProductRecord24 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleProduct24_0(records: ProductRecord24[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleProduct24_1(records: ProductRecord24[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleProduct24_2(records: ProductRecord24[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveProduct24_3(records: ProductRecord24[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeProduct24_4(records: ProductRecord24[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateProduct24_5(records: ProductRecord24[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAccountsService24 {
  private cache = new Map<string, ProductRecord24>();

  splitProduct0(record: ProductRecord24): ProductRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveProduct1(record: ProductRecord24): ProductRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveProduct2(record: ProductRecord24): ProductRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveProduct3(record: ProductRecord24): ProductRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeProduct4(record: ProductRecord24): ProductRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  summarizeProduct5(record: ProductRecord24): ProductRecord24 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
