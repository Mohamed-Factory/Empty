// Synthetic test code for indexing (orders, file 26).

export interface QuotaRecord26 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeQuota26_0(records: QuotaRecord26[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankQuota26_1(records: QuotaRecord26[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterQuota26_2(records: QuotaRecord26[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankQuota26_3(records: QuotaRecord26[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankQuota26_4(records: QuotaRecord26[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterQuota26_5(records: QuotaRecord26[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaOrdersService26 {
  private cache = new Map<string, QuotaRecord26>();

  mergeQuota0(record: QuotaRecord26): QuotaRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportQuota1(record: QuotaRecord26): QuotaRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  rankQuota2(record: QuotaRecord26): QuotaRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  mergeQuota3(record: QuotaRecord26): QuotaRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  validateQuota4(record: QuotaRecord26): QuotaRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  normalizeQuota5(record: QuotaRecord26): QuotaRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
