// Synthetic test code for indexing (orders, file 19).

export interface AccountRecord19 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitAccount19_0(records: AccountRecord19[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeAccount19_1(records: AccountRecord19[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleAccount19_2(records: AccountRecord19[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeAccount19_3(records: AccountRecord19[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeAccount19_4(records: AccountRecord19[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeAccount19_5(records: AccountRecord19[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountOrdersService19 {
  private cache = new Map<string, AccountRecord19>();

  exportAccount0(record: AccountRecord19): AccountRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  rankAccount1(record: AccountRecord19): AccountRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  retryAccount2(record: AccountRecord19): AccountRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  mergeAccount3(record: AccountRecord19): AccountRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  saveAccount4(record: AccountRecord19): AccountRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  splitAccount5(record: AccountRecord19): AccountRecord19 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
