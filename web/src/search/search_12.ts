// Synthetic test code for indexing (search, file 12).

export interface OrderRecord12 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportOrder12_0(records: OrderRecord12[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeOrder12_1(records: OrderRecord12[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitOrder12_2(records: OrderRecord12[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportOrder12_3(records: OrderRecord12[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitOrder12_4(records: OrderRecord12[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatOrder12_5(records: OrderRecord12[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderSearchService12 {
  private cache = new Map<string, OrderRecord12>();

  saveOrder0(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankOrder1(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizeOrder2(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  normalizeOrder3(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeOrder4(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  mergeOrder5(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
