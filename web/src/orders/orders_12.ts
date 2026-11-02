// Synthetic test code for indexing (orders, file 12).

export interface ProductRecord12 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadProduct12_0(records: ProductRecord12[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateProduct12_1(records: ProductRecord12[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatProduct12_2(records: ProductRecord12[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleProduct12_3(records: ProductRecord12[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryProduct12_4(records: ProductRecord12[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatProduct12_5(records: ProductRecord12[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductOrdersService12 {
  private cache = new Map<string, ProductRecord12>();

  mergeProduct0(record: ProductRecord12): ProductRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  mergeProduct1(record: ProductRecord12): ProductRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  loadProduct2(record: ProductRecord12): ProductRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  validateProduct3(record: ProductRecord12): ProductRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  exportProduct4(record: ProductRecord12): ProductRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  validateProduct5(record: ProductRecord12): ProductRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
