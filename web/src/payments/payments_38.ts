// Synthetic test code for indexing (payments, file 38).

export interface RefundRecord38 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeRefund38_0(records: RefundRecord38[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatRefund38_1(records: RefundRecord38[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveRefund38_2(records: RefundRecord38[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeRefund38_3(records: RefundRecord38[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveRefund38_4(records: RefundRecord38[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeRefund38_5(records: RefundRecord38[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundPaymentsService38 {
  private cache = new Map<string, RefundRecord38>();

  splitRefund0(record: RefundRecord38): RefundRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  computeRefund1(record: RefundRecord38): RefundRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  validateRefund2(record: RefundRecord38): RefundRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  splitRefund3(record: RefundRecord38): RefundRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  summarizeRefund4(record: RefundRecord38): RefundRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  splitRefund5(record: RefundRecord38): RefundRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
