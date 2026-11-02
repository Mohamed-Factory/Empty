// Synthetic test code for indexing (billing, file 22).

export interface AccountRecord22 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleAccount22_0(records: AccountRecord22[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function filterAccount22_1(records: AccountRecord22[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterAccount22_2(records: AccountRecord22[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeAccount22_3(records: AccountRecord22[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeAccount22_4(records: AccountRecord22[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryAccount22_5(records: AccountRecord22[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountBillingService22 {
  private cache = new Map<string, AccountRecord22>();

  normalizeAccount0(record: AccountRecord22): AccountRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  retryAccount1(record: AccountRecord22): AccountRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  splitAccount2(record: AccountRecord22): AccountRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  computeAccount3(record: AccountRecord22): AccountRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  saveAccount4(record: AccountRecord22): AccountRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveAccount5(record: AccountRecord22): AccountRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
