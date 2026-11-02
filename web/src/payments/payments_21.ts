// Synthetic test code for indexing (payments, file 21).

export interface SessionRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeSession21_0(records: SessionRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeSession21_1(records: SessionRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadSession21_2(records: SessionRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retrySession21_3(records: SessionRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeSession21_4(records: SessionRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeSession21_5(records: SessionRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionPaymentsService21 {
  private cache = new Map<string, SessionRecord21>();

  loadSession0(record: SessionRecord21): SessionRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  formatSession1(record: SessionRecord21): SessionRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  splitSession2(record: SessionRecord21): SessionRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveSession3(record: SessionRecord21): SessionRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveSession4(record: SessionRecord21): SessionRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  normalizeSession5(record: SessionRecord21): SessionRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
