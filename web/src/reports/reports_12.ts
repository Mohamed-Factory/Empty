// Synthetic test code for indexing (reports, file 12).

export interface OrderRecord12 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveOrder12_0(records: OrderRecord12[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeOrder12_1(records: OrderRecord12[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportOrder12_2(records: OrderRecord12[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateOrder12_3(records: OrderRecord12[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterOrder12_4(records: OrderRecord12[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryOrder12_5(records: OrderRecord12[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderReportsService12 {
  private cache = new Map<string, OrderRecord12>();

  rankOrder0(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  retryOrder1(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  loadOrder2(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  retryOrder3(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateOrder4(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  rankOrder5(record: OrderRecord12): OrderRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
