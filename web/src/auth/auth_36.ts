// Synthetic test code for indexing (auth, file 36).

export interface RefundRecord36 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeRefund36_0(records: RefundRecord36[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveRefund36_1(records: RefundRecord36[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatRefund36_2(records: RefundRecord36[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankRefund36_3(records: RefundRecord36[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterRefund36_4(records: RefundRecord36[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeRefund36_5(records: RefundRecord36[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundAuthService36 {
  private cache = new Map<string, RefundRecord36>();

  splitRefund0(record: RefundRecord36): RefundRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  formatRefund1(record: RefundRecord36): RefundRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  splitRefund2(record: RefundRecord36): RefundRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveRefund3(record: RefundRecord36): RefundRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeRefund4(record: RefundRecord36): RefundRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  splitRefund5(record: RefundRecord36): RefundRecord36 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
