// Synthetic test code for indexing (billing, file 18).

export interface AccountRecord18 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateAccount18_0(records: AccountRecord18[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function rankAccount18_1(records: AccountRecord18[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function normalizeAccount18_2(records: AccountRecord18[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeAccount18_3(records: AccountRecord18[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateAccount18_4(records: AccountRecord18[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatAccount18_5(records: AccountRecord18[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountBillingService18 {
  private cache = new Map<string, AccountRecord18>();

  summarizeAccount0(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  exportAccount1(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  filterAccount2(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  splitAccount3(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  computeAccount4(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  summarizeAccount5(record: AccountRecord18): AccountRecord18 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
