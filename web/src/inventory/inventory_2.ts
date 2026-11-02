// Synthetic test code for indexing (inventory, file 2).

export interface CustomerRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterCustomer2_0(records: CustomerRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportCustomer2_1(records: CustomerRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function computeCustomer2_2(records: CustomerRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeCustomer2_3(records: CustomerRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeCustomer2_4(records: CustomerRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankCustomer2_5(records: CustomerRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CustomerInventoryService2 {
  private cache = new Map<string, CustomerRecord2>();

  rankCustomer0(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  mergeCustomer1(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  formatCustomer2(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  retryCustomer3(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  exportCustomer4(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  normalizeCustomer5(record: CustomerRecord2): CustomerRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

}
