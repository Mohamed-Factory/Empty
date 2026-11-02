// Synthetic test code for indexing (notifications, file 4).

export interface RefundRecord4 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeRefund4_0(records: RefundRecord4[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatRefund4_1(records: RefundRecord4[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankRefund4_2(records: RefundRecord4[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeRefund4_3(records: RefundRecord4[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeRefund4_4(records: RefundRecord4[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeRefund4_5(records: RefundRecord4[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundNotificationsService4 {
  private cache = new Map<string, RefundRecord4>();

  formatRefund0(record: RefundRecord4): RefundRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  summarizeRefund1(record: RefundRecord4): RefundRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  mergeRefund2(record: RefundRecord4): RefundRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  retryRefund3(record: RefundRecord4): RefundRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  exportRefund4(record: RefundRecord4): RefundRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  summarizeRefund5(record: RefundRecord4): RefundRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
