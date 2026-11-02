// Synthetic test code for indexing (search, file 28).

export interface RefundRecord28 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterRefund28_0(records: RefundRecord28[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleRefund28_1(records: RefundRecord28[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeRefund28_2(records: RefundRecord28[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportRefund28_3(records: RefundRecord28[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterRefund28_4(records: RefundRecord28[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterRefund28_5(records: RefundRecord28[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundSearchService28 {
  private cache = new Map<string, RefundRecord28>();

  mergeRefund0(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  filterRefund1(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  formatRefund2(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  splitRefund3(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  mergeRefund4(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  validateRefund5(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
