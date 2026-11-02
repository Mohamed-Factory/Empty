// Synthetic test code for indexing (orders, file 13).

export interface QuotaRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function rankQuota13_0(records: QuotaRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitQuota13_1(records: QuotaRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveQuota13_2(records: QuotaRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateQuota13_3(records: QuotaRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleQuota13_4(records: QuotaRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankQuota13_5(records: QuotaRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaOrdersService13 {
  private cache = new Map<string, QuotaRecord13>();

  loadQuota0(record: QuotaRecord13): QuotaRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  saveQuota1(record: QuotaRecord13): QuotaRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  scheduleQuota2(record: QuotaRecord13): QuotaRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  summarizeQuota3(record: QuotaRecord13): QuotaRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  computeQuota4(record: QuotaRecord13): QuotaRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  splitQuota5(record: QuotaRecord13): QuotaRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
