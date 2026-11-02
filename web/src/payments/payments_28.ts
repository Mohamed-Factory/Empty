// Synthetic test code for indexing (payments, file 28).

export interface OrderRecord28 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatOrder28_0(records: OrderRecord28[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryOrder28_1(records: OrderRecord28[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadOrder28_2(records: OrderRecord28[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveOrder28_3(records: OrderRecord28[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadOrder28_4(records: OrderRecord28[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatOrder28_5(records: OrderRecord28[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class OrderPaymentsService28 {
  private cache = new Map<string, OrderRecord28>();

  saveOrder0(record: OrderRecord28): OrderRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  formatOrder1(record: OrderRecord28): OrderRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  mergeOrder2(record: OrderRecord28): OrderRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  scheduleOrder3(record: OrderRecord28): OrderRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  filterOrder4(record: OrderRecord28): OrderRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryOrder5(record: OrderRecord28): OrderRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
