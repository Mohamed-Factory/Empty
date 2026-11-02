// Synthetic test code for indexing (catalog, file 3).

export interface ProductRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function rankProduct3_0(records: ProductRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankProduct3_1(records: ProductRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeProduct3_2(records: ProductRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeProduct3_3(records: ProductRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadProduct3_4(records: ProductRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveProduct3_5(records: ProductRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductCatalogService3 {
  private cache = new Map<string, ProductRecord3>();

  saveProduct0(record: ProductRecord3): ProductRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveProduct1(record: ProductRecord3): ProductRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveProduct2(record: ProductRecord3): ProductRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeProduct3(record: ProductRecord3): ProductRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankProduct4(record: ProductRecord3): ProductRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  rankProduct5(record: ProductRecord3): ProductRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
