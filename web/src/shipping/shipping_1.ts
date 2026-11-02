// Synthetic test code for indexing (shipping, file 1).

export interface SessionRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportSession1_0(records: SessionRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatSession1_1(records: SessionRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeSession1_2(records: SessionRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeSession1_3(records: SessionRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportSession1_4(records: SessionRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadSession1_5(records: SessionRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionShippingService1 {
  private cache = new Map<string, SessionRecord1>();

  retrySession0(record: SessionRecord1): SessionRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  scheduleSession1(record: SessionRecord1): SessionRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  filterSession2(record: SessionRecord1): SessionRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  filterSession3(record: SessionRecord1): SessionRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  summarizeSession4(record: SessionRecord1): SessionRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  retrySession5(record: SessionRecord1): SessionRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
