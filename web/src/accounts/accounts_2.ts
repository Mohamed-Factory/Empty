// Synthetic test code for indexing (accounts, file 2).

export interface RefundRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitRefund2_0(records: RefundRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterRefund2_1(records: RefundRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeRefund2_2(records: RefundRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryRefund2_3(records: RefundRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeRefund2_4(records: RefundRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryRefund2_5(records: RefundRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundAccountsService2 {
  private cache = new Map<string, RefundRecord2>();

  mergeRefund0(record: RefundRecord2): RefundRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  retryRefund1(record: RefundRecord2): RefundRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeRefund2(record: RefundRecord2): RefundRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankRefund3(record: RefundRecord2): RefundRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeRefund4(record: RefundRecord2): RefundRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterRefund5(record: RefundRecord2): RefundRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
