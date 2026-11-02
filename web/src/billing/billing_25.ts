// Synthetic test code for indexing (billing, file 25).

export interface ReportRecord25 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatReport25_0(records: ReportRecord25[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeReport25_1(records: ReportRecord25[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeReport25_2(records: ReportRecord25[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportReport25_3(records: ReportRecord25[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveReport25_4(records: ReportRecord25[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeReport25_5(records: ReportRecord25[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ReportBillingService25 {
  private cache = new Map<string, ReportRecord25>();

  retryReport0(record: ReportRecord25): ReportRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  exportReport1(record: ReportRecord25): ReportRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  exportReport2(record: ReportRecord25): ReportRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  summarizeReport3(record: ReportRecord25): ReportRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveReport4(record: ReportRecord25): ReportRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  loadReport5(record: ReportRecord25): ReportRecord25 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
