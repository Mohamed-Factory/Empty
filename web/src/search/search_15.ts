// Synthetic test code for indexing (search, file 15).

export interface ReportRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeReport15_0(records: ReportRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatReport15_1(records: ReportRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveReport15_2(records: ReportRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankReport15_3(records: ReportRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankReport15_4(records: ReportRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveReport15_5(records: ReportRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ReportSearchService15 {
  private cache = new Map<string, ReportRecord15>();

  loadReport0(record: ReportRecord15): ReportRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizeReport1(record: ReportRecord15): ReportRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  splitReport2(record: ReportRecord15): ReportRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  retryReport3(record: ReportRecord15): ReportRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  loadReport4(record: ReportRecord15): ReportRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  filterReport5(record: ReportRecord15): ReportRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
