// Synthetic test code for indexing (payments, file 6).

export interface ReportRecord6 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveReport6_0(records: ReportRecord6[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveReport6_1(records: ReportRecord6[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeReport6_2(records: ReportRecord6[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function exportReport6_3(records: ReportRecord6[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeReport6_4(records: ReportRecord6[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportReport6_5(records: ReportRecord6[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ReportPaymentsService6 {
  private cache = new Map<string, ReportRecord6>();

  computeReport0(record: ReportRecord6): ReportRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  splitReport1(record: ReportRecord6): ReportRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveReport2(record: ReportRecord6): ReportRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeReport3(record: ReportRecord6): ReportRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  retryReport4(record: ReportRecord6): ReportRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  loadReport5(record: ReportRecord6): ReportRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
