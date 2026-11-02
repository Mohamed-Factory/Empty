// Synthetic test code for indexing (billing, file 30).

export interface ReportRecord30 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveReport30_0(records: ReportRecord30[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterReport30_1(records: ReportRecord30[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveReport30_2(records: ReportRecord30[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankReport30_3(records: ReportRecord30[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportReport30_4(records: ReportRecord30[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeReport30_5(records: ReportRecord30[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ReportBillingService30 {
  private cache = new Map<string, ReportRecord30>();

  splitReport0(record: ReportRecord30): ReportRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveReport1(record: ReportRecord30): ReportRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  filterReport2(record: ReportRecord30): ReportRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  computeReport3(record: ReportRecord30): ReportRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  filterReport4(record: ReportRecord30): ReportRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  filterReport5(record: ReportRecord30): ReportRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
