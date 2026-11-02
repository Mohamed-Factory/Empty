// Synthetic test code for indexing (inventory, file 10).

export interface OrderRecord10 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveOrder10_0(records: OrderRecord10[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitOrder10_1(records: OrderRecord10[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitOrder10_2(records: OrderRecord10[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitOrder10_3(records: OrderRecord10[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeOrder10_4(records: OrderRecord10[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeOrder10_5(records: OrderRecord10[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderInventoryService10 {
  private cache = new Map<string, OrderRecord10>();

  loadOrder0(record: OrderRecord10): OrderRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  rankOrder1(record: OrderRecord10): OrderRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  loadOrder2(record: OrderRecord10): OrderRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleOrder3(record: OrderRecord10): OrderRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  validateOrder4(record: OrderRecord10): OrderRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  saveOrder5(record: OrderRecord10): OrderRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
