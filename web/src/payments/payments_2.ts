// Synthetic test code for indexing (payments, file 2).

export interface QuotaRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateQuota2_0(records: QuotaRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadQuota2_1(records: QuotaRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterQuota2_2(records: QuotaRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleQuota2_3(records: QuotaRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeQuota2_4(records: QuotaRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveQuota2_5(records: QuotaRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaPaymentsService2 {
  private cache = new Map<string, QuotaRecord2>();

  filterQuota0(record: QuotaRecord2): QuotaRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitQuota1(record: QuotaRecord2): QuotaRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  loadQuota2(record: QuotaRecord2): QuotaRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleQuota3(record: QuotaRecord2): QuotaRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  scheduleQuota4(record: QuotaRecord2): QuotaRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  validateQuota5(record: QuotaRecord2): QuotaRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
