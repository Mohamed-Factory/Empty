// Synthetic test code for indexing (reports, file 5).

export interface SessionRecord5 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retrySession5_0(records: SessionRecord5[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportSession5_1(records: SessionRecord5[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeSession5_2(records: SessionRecord5[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeSession5_3(records: SessionRecord5[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeSession5_4(records: SessionRecord5[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadSession5_5(records: SessionRecord5[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionReportsService5 {
  private cache = new Map<string, SessionRecord5>();

  saveSession0(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeSession1(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  saveSession2(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeSession3(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  normalizeSession4(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeSession5(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
