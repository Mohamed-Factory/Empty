// Synthetic test code for indexing (payments, file 37).

export interface RefundRecord37 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveRefund37_0(records: RefundRecord37[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleRefund37_1(records: RefundRecord37[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveRefund37_2(records: RefundRecord37[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeRefund37_3(records: RefundRecord37[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadRefund37_4(records: RefundRecord37[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeRefund37_5(records: RefundRecord37[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundPaymentsService37 {
  private cache = new Map<string, RefundRecord37>();

  validateRefund0(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  formatRefund1(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  loadRefund2(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizeRefund3(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankRefund4(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  summarizeRefund5(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
