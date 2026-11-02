// Synthetic test code for indexing (payments, file 23).

export interface QuotaRecord23 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadQuota23_0(records: QuotaRecord23[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeQuota23_1(records: QuotaRecord23[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatQuota23_2(records: QuotaRecord23[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateQuota23_3(records: QuotaRecord23[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportQuota23_4(records: QuotaRecord23[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitQuota23_5(records: QuotaRecord23[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class QuotaPaymentsService23 {
  private cache = new Map<string, QuotaRecord23>();

  loadQuota0(record: QuotaRecord23): QuotaRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  summarizeQuota1(record: QuotaRecord23): QuotaRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  summarizeQuota2(record: QuotaRecord23): QuotaRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  loadQuota3(record: QuotaRecord23): QuotaRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  mergeQuota4(record: QuotaRecord23): QuotaRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  rankQuota5(record: QuotaRecord23): QuotaRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
