// Synthetic test code for indexing (search, file 6).

export interface RefundRecord6 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadRefund6_0(records: RefundRecord6[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeRefund6_1(records: RefundRecord6[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleRefund6_2(records: RefundRecord6[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadRefund6_3(records: RefundRecord6[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryRefund6_4(records: RefundRecord6[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatRefund6_5(records: RefundRecord6[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundSearchService6 {
  private cache = new Map<string, RefundRecord6>();

  rankRefund0(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  scheduleRefund1(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  mergeRefund2(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  computeRefund3(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  saveRefund4(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  exportRefund5(record: RefundRecord6): RefundRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
