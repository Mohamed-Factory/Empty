// Synthetic test code for indexing (orders, file 4).

export interface SessionRecord4 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitSession4_0(records: SessionRecord4[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterSession4_1(records: SessionRecord4[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeSession4_2(records: SessionRecord4[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatSession4_3(records: SessionRecord4[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeSession4_4(records: SessionRecord4[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeSession4_5(records: SessionRecord4[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionOrdersService4 {
  private cache = new Map<string, SessionRecord4>();

  filterSession0(record: SessionRecord4): SessionRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitSession1(record: SessionRecord4): SessionRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveSession2(record: SessionRecord4): SessionRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  retrySession3(record: SessionRecord4): SessionRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  scheduleSession4(record: SessionRecord4): SessionRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  saveSession5(record: SessionRecord4): SessionRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
