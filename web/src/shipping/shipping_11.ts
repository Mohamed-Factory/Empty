// Synthetic test code for indexing (shipping, file 11).

export interface RefundRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeRefund11_0(records: RefundRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitRefund11_1(records: RefundRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankRefund11_2(records: RefundRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveRefund11_3(records: RefundRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankRefund11_4(records: RefundRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadRefund11_5(records: RefundRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundShippingService11 {
  private cache = new Map<string, RefundRecord11>();

  computeRefund0(record: RefundRecord11): RefundRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  mergeRefund1(record: RefundRecord11): RefundRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  normalizeRefund2(record: RefundRecord11): RefundRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterRefund3(record: RefundRecord11): RefundRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  normalizeRefund4(record: RefundRecord11): RefundRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  validateRefund5(record: RefundRecord11): RefundRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
