// Synthetic test code for indexing (accounts, file 35).

export interface ProductRecord35 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitProduct35_0(records: ProductRecord35[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeProduct35_1(records: ProductRecord35[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportProduct35_2(records: ProductRecord35[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveProduct35_3(records: ProductRecord35[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateProduct35_4(records: ProductRecord35[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateProduct35_5(records: ProductRecord35[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductAccountsService35 {
  private cache = new Map<string, ProductRecord35>();

  formatProduct0(record: ProductRecord35): ProductRecord35 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  saveProduct1(record: ProductRecord35): ProductRecord35 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankProduct2(record: ProductRecord35): ProductRecord35 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeProduct3(record: ProductRecord35): ProductRecord35 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterProduct4(record: ProductRecord35): ProductRecord35 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  normalizeProduct5(record: ProductRecord35): ProductRecord35 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
