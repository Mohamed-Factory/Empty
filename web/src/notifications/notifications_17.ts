// Synthetic test code for indexing (notifications, file 17).

export interface QuotaRecord17 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveQuota17_0(records: QuotaRecord17[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterQuota17_1(records: QuotaRecord17[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeQuota17_2(records: QuotaRecord17[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatQuota17_3(records: QuotaRecord17[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveQuota17_4(records: QuotaRecord17[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterQuota17_5(records: QuotaRecord17[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaNotificationsService17 {
  private cache = new Map<string, QuotaRecord17>();

  retryQuota0(record: QuotaRecord17): QuotaRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  summarizeQuota1(record: QuotaRecord17): QuotaRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  normalizeQuota2(record: QuotaRecord17): QuotaRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  splitQuota3(record: QuotaRecord17): QuotaRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  computeQuota4(record: QuotaRecord17): QuotaRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  mergeQuota5(record: QuotaRecord17): QuotaRecord17 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
