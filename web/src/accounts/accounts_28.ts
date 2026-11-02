// Synthetic test code for indexing (accounts, file 28).

export interface RefundRecord28 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateRefund28_0(records: RefundRecord28[], limit = 5): number {
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

export function summarizeRefund28_2(records: RefundRecord28[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateRefund28_3(records: RefundRecord28[], limit = 8): number {
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

export class RefundAccountsService28 {
  private cache = new Map<string, RefundRecord28>();

  normalizeRefund0(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankRefund1(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  scheduleRefund2(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  rankRefund3(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  filterRefund4(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitRefund5(record: RefundRecord28): RefundRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
