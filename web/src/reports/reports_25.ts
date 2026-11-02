// Synthetic test code for indexing (reports, file 25).

export interface QuotaRecord25 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatQuota25_0(records: QuotaRecord25[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterQuota25_1(records: QuotaRecord25[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadQuota25_2(records: QuotaRecord25[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeQuota25_3(records: QuotaRecord25[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeQuota25_4(records: QuotaRecord25[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryQuota25_5(records: QuotaRecord25[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaReportsService25 {
  private cache = new Map<string, QuotaRecord25>();

  loadQuota0(record: QuotaRecord25): QuotaRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizeQuota1(record: QuotaRecord25): QuotaRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeQuota2(record: QuotaRecord25): QuotaRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  summarizeQuota3(record: QuotaRecord25): QuotaRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  normalizeQuota4(record: QuotaRecord25): QuotaRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterQuota5(record: QuotaRecord25): QuotaRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
