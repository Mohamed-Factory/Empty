// Synthetic test code for indexing (auth, file 6).

export interface RefundRecord6 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitRefund6_0(records: RefundRecord6[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeRefund6_1(records: RefundRecord6[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeRefund6_2(records: RefundRecord6[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateRefund6_3(records: RefundRecord6[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeRefund6_4(records: RefundRecord6[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleRefund6_5(records: RefundRecord6[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundAuthService6 {
  private cache = new Map<string, RefundRecord6>();

  filterRefund0(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  formatRefund1(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  retryRefund2(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  saveRefund3(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeRefund4(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  formatRefund5(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
