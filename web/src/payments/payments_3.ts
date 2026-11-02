// Synthetic test code for indexing (payments, file 3).

export interface RefundRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function rankRefund3_0(records: RefundRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankRefund3_1(records: RefundRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryRefund3_2(records: RefundRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeRefund3_3(records: RefundRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateRefund3_4(records: RefundRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeRefund3_5(records: RefundRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundPaymentsService3 {
  private cache = new Map<string, RefundRecord3>();

  rankRefund0(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  computeRefund1(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  formatRefund2(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  computeRefund3(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  summarizeRefund4(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  exportRefund5(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
