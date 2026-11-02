// Synthetic test code for indexing (search, file 10).

export interface AccountRecord10 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleAccount10_0(records: AccountRecord10[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveAccount10_1(records: AccountRecord10[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateAccount10_2(records: AccountRecord10[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function formatAccount10_3(records: AccountRecord10[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterAccount10_4(records: AccountRecord10[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportAccount10_5(records: AccountRecord10[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountSearchService10 {
  private cache = new Map<string, AccountRecord10>();

  computeAccount0(record: AccountRecord10): AccountRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  summarizeAccount1(record: AccountRecord10): AccountRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  scheduleAccount2(record: AccountRecord10): AccountRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  retryAccount3(record: AccountRecord10): AccountRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  formatAccount4(record: AccountRecord10): AccountRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  computeAccount5(record: AccountRecord10): AccountRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
