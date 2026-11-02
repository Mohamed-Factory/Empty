// Synthetic test code for indexing (reports, file 2).

export interface SessionRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportSession2_0(records: SessionRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeSession2_1(records: SessionRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleSession2_2(records: SessionRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retrySession2_3(records: SessionRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankSession2_4(records: SessionRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retrySession2_5(records: SessionRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionReportsService2 {
  private cache = new Map<string, SessionRecord2>();

  summarizeSession0(record: SessionRecord2): SessionRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  saveSession1(record: SessionRecord2): SessionRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  retrySession2(record: SessionRecord2): SessionRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  retrySession3(record: SessionRecord2): SessionRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeSession4(record: SessionRecord2): SessionRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterSession5(record: SessionRecord2): SessionRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
