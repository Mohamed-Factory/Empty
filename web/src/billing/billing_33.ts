// Synthetic test code for indexing (billing, file 33).

export interface RefundRecord33 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterRefund33_0(records: RefundRecord33[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterRefund33_1(records: RefundRecord33[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveRefund33_2(records: RefundRecord33[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveRefund33_3(records: RefundRecord33[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeRefund33_4(records: RefundRecord33[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeRefund33_5(records: RefundRecord33[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundBillingService33 {
  private cache = new Map<string, RefundRecord33>();

  summarizeRefund0(record: RefundRecord33): RefundRecord33 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  formatRefund1(record: RefundRecord33): RefundRecord33 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  validateRefund2(record: RefundRecord33): RefundRecord33 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  mergeRefund3(record: RefundRecord33): RefundRecord33 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  saveRefund4(record: RefundRecord33): RefundRecord33 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeRefund5(record: RefundRecord33): RefundRecord33 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
