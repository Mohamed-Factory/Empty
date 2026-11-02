// Synthetic test code for indexing (catalog, file 1).

export interface CustomerRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeCustomer1_0(records: CustomerRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadCustomer1_1(records: CustomerRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveCustomer1_2(records: CustomerRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeCustomer1_3(records: CustomerRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function splitCustomer1_4(records: CustomerRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function normalizeCustomer1_5(records: CustomerRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CustomerCatalogService1 {
  private cache = new Map<string, CustomerRecord1>();

  formatCustomer0(record: CustomerRecord1): CustomerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  scheduleCustomer1(record: CustomerRecord1): CustomerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  filterCustomer2(record: CustomerRecord1): CustomerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  validateCustomer3(record: CustomerRecord1): CustomerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  rankCustomer4(record: CustomerRecord1): CustomerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  scheduleCustomer5(record: CustomerRecord1): CustomerRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
