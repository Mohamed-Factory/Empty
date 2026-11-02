// Synthetic test code for indexing (accounts, file 18).

export interface SessionRecord18 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatSession18_0(records: SessionRecord18[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeSession18_1(records: SessionRecord18[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeSession18_2(records: SessionRecord18[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeSession18_3(records: SessionRecord18[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeSession18_4(records: SessionRecord18[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retrySession18_5(records: SessionRecord18[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionAccountsService18 {
  private cache = new Map<string, SessionRecord18>();

  formatSession0(record: SessionRecord18): SessionRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  mergeSession1(record: SessionRecord18): SessionRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  loadSession2(record: SessionRecord18): SessionRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  splitSession3(record: SessionRecord18): SessionRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveSession4(record: SessionRecord18): SessionRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeSession5(record: SessionRecord18): SessionRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
