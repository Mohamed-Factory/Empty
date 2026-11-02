// Synthetic test code for indexing (search, file 16).

export interface SessionRecord16 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportSession16_0(records: SessionRecord16[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatSession16_1(records: SessionRecord16[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeSession16_2(records: SessionRecord16[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveSession16_3(records: SessionRecord16[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeSession16_4(records: SessionRecord16[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeSession16_5(records: SessionRecord16[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionSearchService16 {
  private cache = new Map<string, SessionRecord16>();

  mergeSession0(record: SessionRecord16): SessionRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportSession1(record: SessionRecord16): SessionRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  loadSession2(record: SessionRecord16): SessionRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  exportSession3(record: SessionRecord16): SessionRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  mergeSession4(record: SessionRecord16): SessionRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  summarizeSession5(record: SessionRecord16): SessionRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
