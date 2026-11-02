// Synthetic test code for indexing (reports, file 21).

export interface ReportRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitReport21_0(records: ReportRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterReport21_1(records: ReportRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadReport21_2(records: ReportRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterReport21_3(records: ReportRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeReport21_4(records: ReportRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportReport21_5(records: ReportRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ReportReportsService21 {
  private cache = new Map<string, ReportRecord21>();

  scheduleReport0(record: ReportRecord21): ReportRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  computeReport1(record: ReportRecord21): ReportRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  scheduleReport2(record: ReportRecord21): ReportRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  summarizeReport3(record: ReportRecord21): ReportRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  formatReport4(record: ReportRecord21): ReportRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  splitReport5(record: ReportRecord21): ReportRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
