// Synthetic test code for indexing (catalog, file 37).

export interface RefundRecord37 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateRefund37_0(records: RefundRecord37[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateRefund37_1(records: RefundRecord37[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeRefund37_2(records: RefundRecord37[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleRefund37_3(records: RefundRecord37[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitRefund37_4(records: RefundRecord37[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadRefund37_5(records: RefundRecord37[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class RefundCatalogService37 {
  private cache = new Map<string, RefundRecord37>();

  mergeRefund0(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportRefund1(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  scheduleRefund2(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  computeRefund3(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  saveRefund4(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeRefund5(record: RefundRecord37): RefundRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
