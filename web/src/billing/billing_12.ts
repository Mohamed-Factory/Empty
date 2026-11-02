// Synthetic test code for indexing (billing, file 12).

export interface AccountRecord12 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function rankAccount12_0(records: AccountRecord12[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function validateAccount12_1(records: AccountRecord12[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryAccount12_2(records: AccountRecord12[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankAccount12_3(records: AccountRecord12[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitAccount12_4(records: AccountRecord12[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterAccount12_5(records: AccountRecord12[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountBillingService12 {
  private cache = new Map<string, AccountRecord12>();

  saveAccount0(record: AccountRecord12): AccountRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  splitAccount1(record: AccountRecord12): AccountRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  splitAccount2(record: AccountRecord12): AccountRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  filterAccount3(record: AccountRecord12): AccountRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  normalizeAccount4(record: AccountRecord12): AccountRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  summarizeAccount5(record: AccountRecord12): AccountRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
