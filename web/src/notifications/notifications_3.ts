// Synthetic test code for indexing (notifications, file 3).

export interface SessionRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateSession3_0(records: SessionRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatSession3_1(records: SessionRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterSession3_2(records: SessionRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterSession3_3(records: SessionRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveSession3_4(records: SessionRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retrySession3_5(records: SessionRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionNotificationsService3 {
  private cache = new Map<string, SessionRecord3>();

  saveSession0(record: SessionRecord3): SessionRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankSession1(record: SessionRecord3): SessionRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  retrySession2(record: SessionRecord3): SessionRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  summarizeSession3(record: SessionRecord3): SessionRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  retrySession4(record: SessionRecord3): SessionRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeSession5(record: SessionRecord3): SessionRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
