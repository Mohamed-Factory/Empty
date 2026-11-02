// Synthetic test code for indexing (inventory, file 1).

export interface AccountRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function loadAccount1_0(records: AccountRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatAccount1_1(records: AccountRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeAccount1_2(records: AccountRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterAccount1_3(records: AccountRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterAccount1_4(records: AccountRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleAccount1_5(records: AccountRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountInventoryService1 {
  private cache = new Map<string, AccountRecord1>();

  splitAccount0(record: AccountRecord1): AccountRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  formatAccount1(record: AccountRecord1): AccountRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  validateAccount2(record: AccountRecord1): AccountRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  computeAccount3(record: AccountRecord1): AccountRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  mergeAccount4(record: AccountRecord1): AccountRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  computeAccount5(record: AccountRecord1): AccountRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
