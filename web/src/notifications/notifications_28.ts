// Synthetic test code for indexing (notifications, file 28).

export interface QuotaRecord28 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryQuota28_0(records: QuotaRecord28[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeQuota28_1(records: QuotaRecord28[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatQuota28_2(records: QuotaRecord28[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeQuota28_3(records: QuotaRecord28[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveQuota28_4(records: QuotaRecord28[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeQuota28_5(records: QuotaRecord28[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaNotificationsService28 {
  private cache = new Map<string, QuotaRecord28>();

  filterQuota0(record: QuotaRecord28): QuotaRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  saveQuota1(record: QuotaRecord28): QuotaRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  retryQuota2(record: QuotaRecord28): QuotaRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  retryQuota3(record: QuotaRecord28): QuotaRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  mergeQuota4(record: QuotaRecord28): QuotaRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  mergeQuota5(record: QuotaRecord28): QuotaRecord28 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
