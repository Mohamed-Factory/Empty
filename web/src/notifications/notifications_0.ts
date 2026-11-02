// Synthetic test code for indexing (notifications, file 0).

export interface QuotaRecord0 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterQuota0_0(records: QuotaRecord0[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatQuota0_1(records: QuotaRecord0[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryQuota0_2(records: QuotaRecord0[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryQuota0_3(records: QuotaRecord0[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryQuota0_4(records: QuotaRecord0[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankQuota0_5(records: QuotaRecord0[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaNotificationsService0 {
  private cache = new Map<string, QuotaRecord0>();

  splitQuota0(record: QuotaRecord0): QuotaRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  mergeQuota1(record: QuotaRecord0): QuotaRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  normalizeQuota2(record: QuotaRecord0): QuotaRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankQuota3(record: QuotaRecord0): QuotaRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  filterQuota4(record: QuotaRecord0): QuotaRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitQuota5(record: QuotaRecord0): QuotaRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
