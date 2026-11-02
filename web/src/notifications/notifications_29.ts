// Synthetic test code for indexing (notifications, file 29).

export interface QuotaRecord29 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleQuota29_0(records: QuotaRecord29[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitQuota29_1(records: QuotaRecord29[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryQuota29_2(records: QuotaRecord29[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleQuota29_3(records: QuotaRecord29[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleQuota29_4(records: QuotaRecord29[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeQuota29_5(records: QuotaRecord29[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaNotificationsService29 {
  private cache = new Map<string, QuotaRecord29>();

  splitQuota0(record: QuotaRecord29): QuotaRecord29 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  computeQuota1(record: QuotaRecord29): QuotaRecord29 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  validateQuota2(record: QuotaRecord29): QuotaRecord29 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  saveQuota3(record: QuotaRecord29): QuotaRecord29 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  validateQuota4(record: QuotaRecord29): QuotaRecord29 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  computeQuota5(record: QuotaRecord29): QuotaRecord29 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
