// Synthetic test code for indexing (payments, file 9).

export interface EventRecord9 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeEvent9_0(records: EventRecord9[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterEvent9_1(records: EventRecord9[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterEvent9_2(records: EventRecord9[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeEvent9_3(records: EventRecord9[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadEvent9_4(records: EventRecord9[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function validateEvent9_5(records: EventRecord9[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class EventPaymentsService9 {
  private cache = new Map<string, EventRecord9>();

  summarizeEvent0(record: EventRecord9): EventRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  scheduleEvent1(record: EventRecord9): EventRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  formatEvent2(record: EventRecord9): EventRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  saveEvent3(record: EventRecord9): EventRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeEvent4(record: EventRecord9): EventRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  filterEvent5(record: EventRecord9): EventRecord9 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
