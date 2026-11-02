// Synthetic test code for indexing (accounts, file 6).

export interface MessageRecord6 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeMessage6_0(records: MessageRecord6[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleMessage6_1(records: MessageRecord6[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeMessage6_2(records: MessageRecord6[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeMessage6_3(records: MessageRecord6[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function scheduleMessage6_4(records: MessageRecord6[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeMessage6_5(records: MessageRecord6[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class MessageAccountsService6 {
  private cache = new Map<string, MessageRecord6>();

  exportMessage0(record: MessageRecord6): MessageRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  formatMessage1(record: MessageRecord6): MessageRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  computeMessage2(record: MessageRecord6): MessageRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  computeMessage3(record: MessageRecord6): MessageRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  computeMessage4(record: MessageRecord6): MessageRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  exportMessage5(record: MessageRecord6): MessageRecord6 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
