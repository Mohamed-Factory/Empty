// Synthetic test code for indexing (catalog, file 2).

export interface CustomerRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryCustomer2_0(records: CustomerRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleCustomer2_1(records: CustomerRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryCustomer2_2(records: CustomerRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function rankCustomer2_3(records: CustomerRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function rankCustomer2_4(records: CustomerRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveCustomer2_5(records: CustomerRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CustomerCatalogService2 {
  private cache = new Map<string, CustomerRecord2>();

  retryCustomer0(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  normalizeCustomer1(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  exportCustomer2(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  exportCustomer3(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  rankCustomer4(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  splitCustomer5(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
