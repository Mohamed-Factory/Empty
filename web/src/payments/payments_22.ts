// Synthetic test code for indexing (payments, file 22).

export interface ReportRecord22 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterReport22_0(records: ReportRecord22[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeReport22_1(records: ReportRecord22[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterReport22_2(records: ReportRecord22[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitReport22_3(records: ReportRecord22[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeReport22_4(records: ReportRecord22[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterReport22_5(records: ReportRecord22[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ReportPaymentsService22 {
  private cache = new Map<string, ReportRecord22>();

  loadReport0(record: ReportRecord22): ReportRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  formatReport1(record: ReportRecord22): ReportRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  loadReport2(record: ReportRecord22): ReportRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  rankReport3(record: ReportRecord22): ReportRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  retryReport4(record: ReportRecord22): ReportRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  exportReport5(record: ReportRecord22): ReportRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
