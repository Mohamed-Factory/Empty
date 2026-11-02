// Synthetic test code for indexing (search, file 30).

export interface MessageRecord30 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeMessage30_0(records: MessageRecord30[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeMessage30_1(records: MessageRecord30[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleMessage30_2(records: MessageRecord30[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryMessage30_3(records: MessageRecord30[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportMessage30_4(records: MessageRecord30[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeMessage30_5(records: MessageRecord30[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class MessageSearchService30 {
  private cache = new Map<string, MessageRecord30>();

  retryMessage0(record: MessageRecord30): MessageRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  scheduleMessage1(record: MessageRecord30): MessageRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  splitMessage2(record: MessageRecord30): MessageRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  computeMessage3(record: MessageRecord30): MessageRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  splitMessage4(record: MessageRecord30): MessageRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  validateMessage5(record: MessageRecord30): MessageRecord30 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
