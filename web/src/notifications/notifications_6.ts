// Synthetic test code for indexing (notifications, file 6).

export interface OrderRecord6 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadOrder6_0(records: OrderRecord6[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateOrder6_1(records: OrderRecord6[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeOrder6_2(records: OrderRecord6[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankOrder6_3(records: OrderRecord6[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportOrder6_4(records: OrderRecord6[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryOrder6_5(records: OrderRecord6[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderNotificationsService6 {
  private cache = new Map<string, OrderRecord6>();

  formatOrder0(record: OrderRecord6): OrderRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  scheduleOrder1(record: OrderRecord6): OrderRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  validateOrder2(record: OrderRecord6): OrderRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  normalizeOrder3(record: OrderRecord6): OrderRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  splitOrder4(record: OrderRecord6): OrderRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  validateOrder5(record: OrderRecord6): OrderRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
