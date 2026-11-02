// Synthetic test code for indexing (shipping, file 14).

export interface MessageRecord14 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatMessage14_0(records: MessageRecord14[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankMessage14_1(records: MessageRecord14[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitMessage14_2(records: MessageRecord14[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeMessage14_3(records: MessageRecord14[], limit = 8): number {
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

export function exportMessage14_5(records: MessageRecord14[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class MessageShippingService14 {
  private cache = new Map<string, MessageRecord14>();

  retryMessage0(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  retryMessage1(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  rankMessage2(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  loadMessage3(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizeMessage4(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  validateMessage5(record: MessageRecord14): MessageRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
