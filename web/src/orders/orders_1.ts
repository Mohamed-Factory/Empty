// Synthetic test code for indexing (orders, file 1).

export interface EventRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeEvent1_0(records: EventRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterEvent1_1(records: EventRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveEvent1_2(records: EventRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeEvent1_3(records: EventRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeEvent1_4(records: EventRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeEvent1_5(records: EventRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class EventOrdersService1 {
  private cache = new Map<string, EventRecord1>();

  filterEvent0(record: EventRecord1): EventRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  loadEvent1(record: EventRecord1): EventRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleEvent2(record: EventRecord1): EventRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  retryEvent3(record: EventRecord1): EventRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  exportEvent4(record: EventRecord1): EventRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  rankEvent5(record: EventRecord1): EventRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
