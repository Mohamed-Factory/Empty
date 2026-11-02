// Synthetic test code for indexing (payments, file 1).

export interface ProductRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportProduct1_0(records: ProductRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeProduct1_1(records: ProductRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateProduct1_2(records: ProductRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeProduct1_3(records: ProductRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeProduct1_4(records: ProductRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveProduct1_5(records: ProductRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ProductPaymentsService1 {
  private cache = new Map<string, ProductRecord1>();

  saveProduct0(record: ProductRecord1): ProductRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  loadProduct1(record: ProductRecord1): ProductRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  splitProduct2(record: ProductRecord1): ProductRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  loadProduct3(record: ProductRecord1): ProductRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  rankProduct4(record: ProductRecord1): ProductRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  retryProduct5(record: ProductRecord1): ProductRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
