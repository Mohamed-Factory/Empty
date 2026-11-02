// Synthetic test code for indexing (orders, file 15).

export interface AccountRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateAccount15_0(records: AccountRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryAccount15_1(records: AccountRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterAccount15_2(records: AccountRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadAccount15_3(records: AccountRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankAccount15_4(records: AccountRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveAccount15_5(records: AccountRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountOrdersService15 {
  private cache = new Map<string, AccountRecord15>();

  formatAccount0(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  normalizeAccount1(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  rankAccount2(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  splitAccount3(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  normalizeAccount4(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterAccount5(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
