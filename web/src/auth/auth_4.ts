// Synthetic test code for indexing (auth, file 4).

export interface EventRecord4 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeEvent4_0(records: EventRecord4[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitEvent4_1(records: EventRecord4[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankEvent4_2(records: EventRecord4[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeEvent4_3(records: EventRecord4[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleEvent4_4(records: EventRecord4[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportEvent4_5(records: EventRecord4[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class EventAuthService4 {
  private cache = new Map<string, EventRecord4>();

  splitEvent0(record: EventRecord4): EventRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  formatEvent1(record: EventRecord4): EventRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  retryEvent2(record: EventRecord4): EventRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeEvent3(record: EventRecord4): EventRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  scheduleEvent4(record: EventRecord4): EventRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  validateEvent5(record: EventRecord4): EventRecord4 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
