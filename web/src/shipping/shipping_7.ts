// Synthetic test code for indexing (shipping, file 7).

export interface RefundRecord7 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryRefund7_0(records: RefundRecord7[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportRefund7_1(records: RefundRecord7[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeRefund7_2(records: RefundRecord7[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatRefund7_3(records: RefundRecord7[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleRefund7_4(records: RefundRecord7[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitRefund7_5(records: RefundRecord7[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundShippingService7 {
  private cache = new Map<string, RefundRecord7>();

  filterRefund0(record: RefundRecord7): RefundRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  rankRefund1(record: RefundRecord7): RefundRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  saveRefund2(record: RefundRecord7): RefundRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeRefund3(record: RefundRecord7): RefundRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  normalizeRefund4(record: RefundRecord7): RefundRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computeRefund5(record: RefundRecord7): RefundRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
