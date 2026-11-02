// Synthetic test code for indexing (shipping, file 23).

export interface AddressRecord23 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function validateAddress23_0(records: AddressRecord23[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleAddress23_1(records: AddressRecord23[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function formatAddress23_2(records: AddressRecord23[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleAddress23_3(records: AddressRecord23[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryAddress23_4(records: AddressRecord23[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeAddress23_5(records: AddressRecord23[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressShippingService23 {
  private cache = new Map<string, AddressRecord23>();

  retryAddress0(record: AddressRecord23): AddressRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateAddress1(record: AddressRecord23): AddressRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  rankAddress2(record: AddressRecord23): AddressRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  mergeAddress3(record: AddressRecord23): AddressRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  rankAddress4(record: AddressRecord23): AddressRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  saveAddress5(record: AddressRecord23): AddressRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
