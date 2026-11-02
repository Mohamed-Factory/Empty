// Synthetic test code for indexing (shipping, file 25).

export interface RefundRecord25 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportRefund25_0(records: RefundRecord25[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveRefund25_1(records: RefundRecord25[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeRefund25_2(records: RefundRecord25[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadRefund25_3(records: RefundRecord25[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportRefund25_4(records: RefundRecord25[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankRefund25_5(records: RefundRecord25[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundShippingService25 {
  private cache = new Map<string, RefundRecord25>();

  filterRefund0(record: RefundRecord25): RefundRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  filterRefund1(record: RefundRecord25): RefundRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  filterRefund2(record: RefundRecord25): RefundRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  saveRefund3(record: RefundRecord25): RefundRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeRefund4(record: RefundRecord25): RefundRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computeRefund5(record: RefundRecord25): RefundRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
