// Synthetic test code for indexing (reports, file 3).

export interface AccountRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveAccount3_0(records: AccountRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportAccount3_1(records: AccountRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryAccount3_2(records: AccountRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleAccount3_3(records: AccountRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeAccount3_4(records: AccountRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveAccount3_5(records: AccountRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountReportsService3 {
  private cache = new Map<string, AccountRecord3>();

  normalizeAccount0(record: AccountRecord3): AccountRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  formatAccount1(record: AccountRecord3): AccountRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  rankAccount2(record: AccountRecord3): AccountRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  rankAccount3(record: AccountRecord3): AccountRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  scheduleAccount4(record: AccountRecord3): AccountRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  retryAccount5(record: AccountRecord3): AccountRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
