// Synthetic test code for indexing (billing, file 37).

export interface OrderRecord37 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveOrder37_0(records: OrderRecord37[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankOrder37_1(records: OrderRecord37[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitOrder37_2(records: OrderRecord37[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportOrder37_3(records: OrderRecord37[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatOrder37_4(records: OrderRecord37[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadOrder37_5(records: OrderRecord37[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderBillingService37 {
  private cache = new Map<string, OrderRecord37>();

  loadOrder0(record: OrderRecord37): OrderRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  mergeOrder1(record: OrderRecord37): OrderRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  retryOrder2(record: OrderRecord37): OrderRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateOrder3(record: OrderRecord37): OrderRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  rankOrder4(record: OrderRecord37): OrderRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  formatOrder5(record: OrderRecord37): OrderRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
