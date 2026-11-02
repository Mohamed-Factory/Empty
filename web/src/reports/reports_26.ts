// Synthetic test code for indexing (reports, file 26).

export interface SessionRecord26 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitSession26_0(records: SessionRecord26[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeSession26_1(records: SessionRecord26[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retrySession26_2(records: SessionRecord26[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatSession26_3(records: SessionRecord26[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatSession26_4(records: SessionRecord26[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateSession26_5(records: SessionRecord26[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionReportsService26 {
  private cache = new Map<string, SessionRecord26>();

  loadSession0(record: SessionRecord26): SessionRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleSession1(record: SessionRecord26): SessionRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  filterSession2(record: SessionRecord26): SessionRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  scheduleSession3(record: SessionRecord26): SessionRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  formatSession4(record: SessionRecord26): SessionRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  scheduleSession5(record: SessionRecord26): SessionRecord26 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
