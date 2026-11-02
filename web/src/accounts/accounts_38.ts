// Synthetic test code for indexing (accounts, file 38).

export interface SessionRecord38 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitSession38_0(records: SessionRecord38[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatSession38_1(records: SessionRecord38[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retrySession38_2(records: SessionRecord38[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retrySession38_3(records: SessionRecord38[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeSession38_4(records: SessionRecord38[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeSession38_5(records: SessionRecord38[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionAccountsService38 {
  private cache = new Map<string, SessionRecord38>();

  normalizeSession0(record: SessionRecord38): SessionRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  scheduleSession1(record: SessionRecord38): SessionRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  retrySession2(record: SessionRecord38): SessionRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  loadSession3(record: SessionRecord38): SessionRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  mergeSession4(record: SessionRecord38): SessionRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  saveSession5(record: SessionRecord38): SessionRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
