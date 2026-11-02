// Synthetic test code for indexing (shipping, file 21).

export interface OrderRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterOrder21_0(records: OrderRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleOrder21_1(records: OrderRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterOrder21_2(records: OrderRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportOrder21_3(records: OrderRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeOrder21_4(records: OrderRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeOrder21_5(records: OrderRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderShippingService21 {
  private cache = new Map<string, OrderRecord21>();

  scheduleOrder0(record: OrderRecord21): OrderRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  scheduleOrder1(record: OrderRecord21): OrderRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  computeOrder2(record: OrderRecord21): OrderRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankOrder3(record: OrderRecord21): OrderRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizeOrder4(record: OrderRecord21): OrderRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  rankOrder5(record: OrderRecord21): OrderRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
