// Synthetic test code for indexing (billing, file 9).

export interface OrderRecord9 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryOrder9_0(records: OrderRecord9[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeOrder9_1(records: OrderRecord9[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitOrder9_2(records: OrderRecord9[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatOrder9_3(records: OrderRecord9[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveOrder9_4(records: OrderRecord9[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeOrder9_5(records: OrderRecord9[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderBillingService9 {
  private cache = new Map<string, OrderRecord9>();

  filterOrder0(record: OrderRecord9): OrderRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  scheduleOrder1(record: OrderRecord9): OrderRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  mergeOrder2(record: OrderRecord9): OrderRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  computeOrder3(record: OrderRecord9): OrderRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankOrder4(record: OrderRecord9): OrderRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeOrder5(record: OrderRecord9): OrderRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
