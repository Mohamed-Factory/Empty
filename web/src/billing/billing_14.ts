// Synthetic test code for indexing (billing, file 14).

export interface SessionRecord14 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveSession14_0(records: SessionRecord14[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatSession14_1(records: SessionRecord14[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitSession14_2(records: SessionRecord14[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateSession14_3(records: SessionRecord14[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeSession14_4(records: SessionRecord14[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadSession14_5(records: SessionRecord14[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionBillingService14 {
  private cache = new Map<string, SessionRecord14>();

  scheduleSession0(record: SessionRecord14): SessionRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  scheduleSession1(record: SessionRecord14): SessionRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  formatSession2(record: SessionRecord14): SessionRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  summarizeSession3(record: SessionRecord14): SessionRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  retrySession4(record: SessionRecord14): SessionRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateSession5(record: SessionRecord14): SessionRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
