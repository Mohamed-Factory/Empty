// Synthetic test code for indexing (search, file 18).

export interface OrderRecord18 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadOrder18_0(records: OrderRecord18[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitOrder18_1(records: OrderRecord18[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeOrder18_2(records: OrderRecord18[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportOrder18_3(records: OrderRecord18[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleOrder18_4(records: OrderRecord18[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveOrder18_5(records: OrderRecord18[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderSearchService18 {
  private cache = new Map<string, OrderRecord18>();

  retryOrder0(record: OrderRecord18): OrderRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateOrder1(record: OrderRecord18): OrderRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  loadOrder2(record: OrderRecord18): OrderRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  retryOrder3(record: OrderRecord18): OrderRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeOrder4(record: OrderRecord18): OrderRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  loadOrder5(record: OrderRecord18): OrderRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
