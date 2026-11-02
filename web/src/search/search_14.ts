// Synthetic test code for indexing (search, file 14).

export interface MessageRecord14 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeMessage14_0(records: MessageRecord14[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveMessage14_1(records: MessageRecord14[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterMessage14_2(records: MessageRecord14[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryMessage14_3(records: MessageRecord14[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function loadMessage14_4(records: MessageRecord14[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleMessage14_5(records: MessageRecord14[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class MessageSearchService14 {
  private cache = new Map<string, MessageRecord14>();

  computeMessage0(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  scheduleMessage1(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  splitMessage2(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveMessage3(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeMessage4(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  computeMessage5(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
