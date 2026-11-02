// Synthetic test code for indexing (billing, file 19).

export interface MessageRecord19 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleMessage19_0(records: MessageRecord19[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatMessage19_1(records: MessageRecord19[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitMessage19_2(records: MessageRecord19[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankMessage19_3(records: MessageRecord19[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankMessage19_4(records: MessageRecord19[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeMessage19_5(records: MessageRecord19[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class MessageBillingService19 {
  private cache = new Map<string, MessageRecord19>();

  normalizeMessage0(record: MessageRecord19): MessageRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  summarizeMessage1(record: MessageRecord19): MessageRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  normalizeMessage2(record: MessageRecord19): MessageRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  saveMessage3(record: MessageRecord19): MessageRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  computeMessage4(record: MessageRecord19): MessageRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  computeMessage5(record: MessageRecord19): MessageRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
