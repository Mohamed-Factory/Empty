// Synthetic test code for indexing (analytics, file 13).

export interface RefundRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateRefund13_0(records: RefundRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadRefund13_1(records: RefundRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterRefund13_2(records: RefundRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatRefund13_3(records: RefundRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeRefund13_4(records: RefundRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatRefund13_5(records: RefundRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundAnalyticsService13 {
  private cache = new Map<string, RefundRecord13>();

  saveRefund0(record: RefundRecord13): RefundRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  scheduleRefund1(record: RefundRecord13): RefundRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  computeRefund2(record: RefundRecord13): RefundRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  scheduleRefund3(record: RefundRecord13): RefundRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  exportRefund4(record: RefundRecord13): RefundRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  saveRefund5(record: RefundRecord13): RefundRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
