// Synthetic test code for indexing (orders, file 28).

export interface RefundRecord28 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeRefund28_0(records: RefundRecord28[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadRefund28_1(records: RefundRecord28[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadRefund28_2(records: RefundRecord28[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeRefund28_3(records: RefundRecord28[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportRefund28_4(records: RefundRecord28[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatRefund28_5(records: RefundRecord28[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundOrdersService28 {
  private cache = new Map<string, RefundRecord28>();

  saveRefund0(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankRefund1(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  exportRefund2(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  exportRefund3(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  saveRefund4(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  filterRefund5(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
