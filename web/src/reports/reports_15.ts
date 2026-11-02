// Synthetic test code for indexing (reports, file 15).

export interface AccountRecord15 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportAccount15_0(records: AccountRecord15[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatAccount15_1(records: AccountRecord15[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadAccount15_2(records: AccountRecord15[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeAccount15_3(records: AccountRecord15[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeAccount15_4(records: AccountRecord15[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function loadAccount15_5(records: AccountRecord15[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AccountReportsService15 {
  private cache = new Map<string, AccountRecord15>();

  loadAccount0(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  scheduleAccount1(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  summarizeAccount2(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  exportAccount3(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  mergeAccount4(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  saveAccount5(record: AccountRecord15): AccountRecord15 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
