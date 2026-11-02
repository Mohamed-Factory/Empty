// Synthetic test code for indexing (shipping, file 10).

export interface MessageRecord10 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportMessage10_0(records: MessageRecord10[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadMessage10_1(records: MessageRecord10[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeMessage10_2(records: MessageRecord10[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadMessage10_3(records: MessageRecord10[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeMessage10_4(records: MessageRecord10[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadMessage10_5(records: MessageRecord10[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class MessageShippingService10 {
  private cache = new Map<string, MessageRecord10>();

  mergeMessage0(record: MessageRecord10): MessageRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  scheduleMessage1(record: MessageRecord10): MessageRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  computeMessage2(record: MessageRecord10): MessageRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  formatMessage3(record: MessageRecord10): MessageRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  mergeMessage4(record: MessageRecord10): MessageRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportMessage5(record: MessageRecord10): MessageRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
