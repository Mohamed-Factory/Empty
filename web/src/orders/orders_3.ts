// Synthetic test code for indexing (orders, file 3).

export interface RefundRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveRefund3_0(records: RefundRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveRefund3_1(records: RefundRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeRefund3_2(records: RefundRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterRefund3_3(records: RefundRecord3[], limit = 8): number {
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

export function saveRefund3_5(records: RefundRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundOrdersService3 {
  private cache = new Map<string, RefundRecord3>();

  validateRefund0(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  formatRefund1(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  filterRefund2(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  rankRefund3(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  filterRefund4(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  summarizeRefund5(record: RefundRecord3): RefundRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
