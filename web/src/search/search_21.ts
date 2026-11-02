// Synthetic test code for indexing (search, file 21).

export interface CustomerRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeCustomer21_0(records: CustomerRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryCustomer21_1(records: CustomerRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitCustomer21_2(records: CustomerRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function filterCustomer21_3(records: CustomerRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterCustomer21_4(records: CustomerRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveCustomer21_5(records: CustomerRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CustomerSearchService21 {
  private cache = new Map<string, CustomerRecord21>();

  mergeCustomer0(record: CustomerRecord21): CustomerRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  rankCustomer1(record: CustomerRecord21): CustomerRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  rankCustomer2(record: CustomerRecord21): CustomerRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  retryCustomer3(record: CustomerRecord21): CustomerRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  loadCustomer4(record: CustomerRecord21): CustomerRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  normalizeCustomer5(record: CustomerRecord21): CustomerRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
