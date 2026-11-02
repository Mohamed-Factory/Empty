// Synthetic test code for indexing (auth, file 26).

export interface ProductRecord26 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadProduct26_0(records: ProductRecord26[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatProduct26_1(records: ProductRecord26[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeProduct26_2(records: ProductRecord26[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleProduct26_3(records: ProductRecord26[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeProduct26_4(records: ProductRecord26[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeProduct26_5(records: ProductRecord26[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAuthService26 {
  private cache = new Map<string, ProductRecord26>();

  rankProduct0(record: ProductRecord26): ProductRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  exportProduct1(record: ProductRecord26): ProductRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  loadProduct2(record: ProductRecord26): ProductRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  formatProduct3(record: ProductRecord26): ProductRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  normalizeProduct4(record: ProductRecord26): ProductRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  splitProduct5(record: ProductRecord26): ProductRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
