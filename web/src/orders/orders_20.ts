// Synthetic test code for indexing (orders, file 20).

export interface OrderRecord20 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitOrder20_0(records: OrderRecord20[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadOrder20_1(records: OrderRecord20[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeOrder20_2(records: OrderRecord20[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveOrder20_3(records: OrderRecord20[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportOrder20_4(records: OrderRecord20[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeOrder20_5(records: OrderRecord20[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderOrdersService20 {
  private cache = new Map<string, OrderRecord20>();

  filterOrder0(record: OrderRecord20): OrderRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitOrder1(record: OrderRecord20): OrderRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  filterOrder2(record: OrderRecord20): OrderRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitOrder3(record: OrderRecord20): OrderRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  scheduleOrder4(record: OrderRecord20): OrderRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  rankOrder5(record: OrderRecord20): OrderRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
