// Synthetic test code for indexing (shipping, file 5).

export interface SessionRecord5 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleSession5_0(records: SessionRecord5[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeSession5_1(records: SessionRecord5[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadSession5_2(records: SessionRecord5[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleSession5_3(records: SessionRecord5[], limit = 8): number {
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

export function formatSession5_5(records: SessionRecord5[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionShippingService5 {
  private cache = new Map<string, SessionRecord5>();

  mergeSession0(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  loadSession1(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  mergeSession2(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportSession3(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  retrySession4(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  formatSession5(record: SessionRecord5): SessionRecord5 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
