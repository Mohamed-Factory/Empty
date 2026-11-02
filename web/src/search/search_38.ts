// Synthetic test code for indexing (search, file 38).

export interface AccountRecord38 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportAccount38_0(records: AccountRecord38[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeAccount38_1(records: AccountRecord38[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterAccount38_2(records: AccountRecord38[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeAccount38_3(records: AccountRecord38[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeAccount38_4(records: AccountRecord38[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleAccount38_5(records: AccountRecord38[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountSearchService38 {
  private cache = new Map<string, AccountRecord38>();

  saveAccount0(record: AccountRecord38): AccountRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  retryAccount1(record: AccountRecord38): AccountRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeAccount2(record: AccountRecord38): AccountRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  retryAccount3(record: AccountRecord38): AccountRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  rankAccount4(record: AccountRecord38): AccountRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  filterAccount5(record: AccountRecord38): AccountRecord38 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
