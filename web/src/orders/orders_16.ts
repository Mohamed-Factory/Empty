// Synthetic test code for indexing (orders, file 16).

export interface RefundRecord16 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitRefund16_0(records: RefundRecord16[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatRefund16_1(records: RefundRecord16[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeRefund16_2(records: RefundRecord16[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryRefund16_3(records: RefundRecord16[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeRefund16_4(records: RefundRecord16[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveRefund16_5(records: RefundRecord16[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundOrdersService16 {
  private cache = new Map<string, RefundRecord16>();

  mergeRefund0(record: RefundRecord16): RefundRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  splitRefund1(record: RefundRecord16): RefundRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveRefund2(record: RefundRecord16): RefundRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  formatRefund3(record: RefundRecord16): RefundRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  rankRefund4(record: RefundRecord16): RefundRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  rankRefund5(record: RefundRecord16): RefundRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
