// Synthetic test code for indexing (payments, file 30).

export interface QuotaRecord30 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportQuota30_0(records: QuotaRecord30[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitQuota30_1(records: QuotaRecord30[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankQuota30_2(records: QuotaRecord30[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeQuota30_3(records: QuotaRecord30[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankQuota30_4(records: QuotaRecord30[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveQuota30_5(records: QuotaRecord30[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaPaymentsService30 {
  private cache = new Map<string, QuotaRecord30>();

  summarizeQuota0(record: QuotaRecord30): QuotaRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  summarizeQuota1(record: QuotaRecord30): QuotaRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  computeQuota2(record: QuotaRecord30): QuotaRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  filterQuota3(record: QuotaRecord30): QuotaRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  normalizeQuota4(record: QuotaRecord30): QuotaRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankQuota5(record: QuotaRecord30): QuotaRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
