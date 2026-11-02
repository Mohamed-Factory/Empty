// Synthetic test code for indexing (billing, file 31).

export interface OrderRecord31 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterOrder31_0(records: OrderRecord31[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveOrder31_1(records: OrderRecord31[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitOrder31_2(records: OrderRecord31[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankOrder31_3(records: OrderRecord31[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterOrder31_4(records: OrderRecord31[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterOrder31_5(records: OrderRecord31[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderBillingService31 {
  private cache = new Map<string, OrderRecord31>();

  summarizeOrder0(record: OrderRecord31): OrderRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  mergeOrder1(record: OrderRecord31): OrderRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  formatOrder2(record: OrderRecord31): OrderRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  computeOrder3(record: OrderRecord31): OrderRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankOrder4(record: OrderRecord31): OrderRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  scheduleOrder5(record: OrderRecord31): OrderRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
