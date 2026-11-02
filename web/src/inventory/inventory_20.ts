// Synthetic test code for indexing (inventory, file 20).

export interface ReportRecord20 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitReport20_0(records: ReportRecord20[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeReport20_1(records: ReportRecord20[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeReport20_2(records: ReportRecord20[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeReport20_3(records: ReportRecord20[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeReport20_4(records: ReportRecord20[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitReport20_5(records: ReportRecord20[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ReportInventoryService20 {
  private cache = new Map<string, ReportRecord20>();

  saveReport0(record: ReportRecord20): ReportRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  loadReport1(record: ReportRecord20): ReportRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  saveReport2(record: ReportRecord20): ReportRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeReport3(record: ReportRecord20): ReportRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  summarizeReport4(record: ReportRecord20): ReportRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveReport5(record: ReportRecord20): ReportRecord20 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
