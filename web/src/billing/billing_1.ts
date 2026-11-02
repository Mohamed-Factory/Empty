// Synthetic test code for indexing (billing, file 1).

export interface QuotaRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitQuota1_0(records: QuotaRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadQuota1_1(records: QuotaRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadQuota1_2(records: QuotaRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveQuota1_3(records: QuotaRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeQuota1_4(records: QuotaRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeQuota1_5(records: QuotaRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaBillingService1 {
  private cache = new Map<string, QuotaRecord1>();

  summarizeQuota0(record: QuotaRecord1): QuotaRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  filterQuota1(record: QuotaRecord1): QuotaRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  loadQuota2(record: QuotaRecord1): QuotaRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  summarizeQuota3(record: QuotaRecord1): QuotaRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  computeQuota4(record: QuotaRecord1): QuotaRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  scheduleQuota5(record: QuotaRecord1): QuotaRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
