// Synthetic test code for indexing (auth, file 25).

export interface OrderRecord25 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeOrder25_0(records: OrderRecord25[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryOrder25_1(records: OrderRecord25[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeOrder25_2(records: OrderRecord25[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatOrder25_3(records: OrderRecord25[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankOrder25_4(records: OrderRecord25[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeOrder25_5(records: OrderRecord25[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderAuthService25 {
  private cache = new Map<string, OrderRecord25>();

  splitOrder0(record: OrderRecord25): OrderRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  splitOrder1(record: OrderRecord25): OrderRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  retryOrder2(record: OrderRecord25): OrderRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeOrder3(record: OrderRecord25): OrderRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  splitOrder4(record: OrderRecord25): OrderRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  splitOrder5(record: OrderRecord25): OrderRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
