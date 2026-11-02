// Synthetic test code for indexing (payments, file 11).

export interface SessionRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateSession11_0(records: SessionRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeSession11_1(records: SessionRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveSession11_2(records: SessionRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleSession11_3(records: SessionRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleSession11_4(records: SessionRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateSession11_5(records: SessionRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionPaymentsService11 {
  private cache = new Map<string, SessionRecord11>();

  formatSession0(record: SessionRecord11): SessionRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  formatSession1(record: SessionRecord11): SessionRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  normalizeSession2(record: SessionRecord11): SessionRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computeSession3(record: SessionRecord11): SessionRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  saveSession4(record: SessionRecord11): SessionRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeSession5(record: SessionRecord11): SessionRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
