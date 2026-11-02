// Synthetic test code for indexing (reports, file 13).

export interface AccountRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeAccount13_0(records: AccountRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeAccount13_1(records: AccountRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatAccount13_2(records: AccountRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function splitAccount13_3(records: AccountRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterAccount13_4(records: AccountRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterAccount13_5(records: AccountRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountReportsService13 {
  private cache = new Map<string, AccountRecord13>();

  normalizeAccount0(record: AccountRecord13): AccountRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computeAccount1(record: AccountRecord13): AccountRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  computeAccount2(record: AccountRecord13): AccountRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankAccount3(record: AccountRecord13): AccountRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  mergeAccount4(record: AccountRecord13): AccountRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  formatAccount5(record: AccountRecord13): AccountRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
