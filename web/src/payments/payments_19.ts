// Synthetic test code for indexing (payments, file 19).

export interface SessionRecord19 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeSession19_0(records: SessionRecord19[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeSession19_1(records: SessionRecord19[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveSession19_2(records: SessionRecord19[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitSession19_3(records: SessionRecord19[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatSession19_4(records: SessionRecord19[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterSession19_5(records: SessionRecord19[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class SessionPaymentsService19 {
  private cache = new Map<string, SessionRecord19>();

  computeSession0(record: SessionRecord19): SessionRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  summarizeSession1(record: SessionRecord19): SessionRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  computeSession2(record: SessionRecord19): SessionRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  saveSession3(record: SessionRecord19): SessionRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  summarizeSession4(record: SessionRecord19): SessionRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  formatSession5(record: SessionRecord19): SessionRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
