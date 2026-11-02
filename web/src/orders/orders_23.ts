// Synthetic test code for indexing (orders, file 23).

export interface SessionRecord23 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeSession23_0(records: SessionRecord23[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeSession23_1(records: SessionRecord23[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retrySession23_2(records: SessionRecord23[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateSession23_3(records: SessionRecord23[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveSession23_4(records: SessionRecord23[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeSession23_5(records: SessionRecord23[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionOrdersService23 {
  private cache = new Map<string, SessionRecord23>();

  rankSession0(record: SessionRecord23): SessionRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  saveSession1(record: SessionRecord23): SessionRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  summarizeSession2(record: SessionRecord23): SessionRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  summarizeSession3(record: SessionRecord23): SessionRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  computeSession4(record: SessionRecord23): SessionRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  retrySession5(record: SessionRecord23): SessionRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
