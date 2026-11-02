// Synthetic test code for indexing (payments, file 18).

export interface AccountRecord18 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryAccount18_0(records: AccountRecord18[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeAccount18_1(records: AccountRecord18[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveAccount18_2(records: AccountRecord18[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadAccount18_3(records: AccountRecord18[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeAccount18_4(records: AccountRecord18[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleAccount18_5(records: AccountRecord18[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountPaymentsService18 {
  private cache = new Map<string, AccountRecord18>();

  loadAccount0(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleAccount1(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  mergeAccount2(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  computeAccount3(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  normalizeAccount4(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterAccount5(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
