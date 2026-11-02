// Synthetic test code for indexing (analytics, file 14).

export interface AccountRecord14 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeAccount14_0(records: AccountRecord14[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatAccount14_1(records: AccountRecord14[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadAccount14_2(records: AccountRecord14[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeAccount14_3(records: AccountRecord14[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeAccount14_4(records: AccountRecord14[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeAccount14_5(records: AccountRecord14[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountAnalyticsService14 {
  private cache = new Map<string, AccountRecord14>();

  filterAccount0(record: AccountRecord14): AccountRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryAccount1(record: AccountRecord14): AccountRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  filterAccount2(record: AccountRecord14): AccountRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  normalizeAccount3(record: AccountRecord14): AccountRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeAccount4(record: AccountRecord14): AccountRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  saveAccount5(record: AccountRecord14): AccountRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
