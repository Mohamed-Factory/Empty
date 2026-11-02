// Synthetic test code for indexing (reports, file 14).

export interface QuotaRecord14 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryQuota14_0(records: QuotaRecord14[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankQuota14_1(records: QuotaRecord14[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatQuota14_2(records: QuotaRecord14[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitQuota14_3(records: QuotaRecord14[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleQuota14_4(records: QuotaRecord14[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeQuota14_5(records: QuotaRecord14[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaReportsService14 {
  private cache = new Map<string, QuotaRecord14>();

  saveQuota0(record: QuotaRecord14): QuotaRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  filterQuota1(record: QuotaRecord14): QuotaRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  loadQuota2(record: QuotaRecord14): QuotaRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  filterQuota3(record: QuotaRecord14): QuotaRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  summarizeQuota4(record: QuotaRecord14): QuotaRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  splitQuota5(record: QuotaRecord14): QuotaRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
