// Synthetic test code for indexing (notifications, file 8).

export interface QuotaRecord8 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeQuota8_0(records: QuotaRecord8[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeQuota8_1(records: QuotaRecord8[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeQuota8_2(records: QuotaRecord8[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportQuota8_3(records: QuotaRecord8[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateQuota8_4(records: QuotaRecord8[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeQuota8_5(records: QuotaRecord8[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaNotificationsService8 {
  private cache = new Map<string, QuotaRecord8>();

  loadQuota0(record: QuotaRecord8): QuotaRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  splitQuota1(record: QuotaRecord8): QuotaRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  formatQuota2(record: QuotaRecord8): QuotaRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  normalizeQuota3(record: QuotaRecord8): QuotaRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterQuota4(record: QuotaRecord8): QuotaRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitQuota5(record: QuotaRecord8): QuotaRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
