// Synthetic test code for indexing (orders, file 37).

export interface AddressRecord37 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeAddress37_0(records: AddressRecord37[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeAddress37_1(records: AddressRecord37[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateAddress37_2(records: AddressRecord37[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateAddress37_3(records: AddressRecord37[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveAddress37_4(records: AddressRecord37[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function formatAddress37_5(records: AddressRecord37[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressOrdersService37 {
  private cache = new Map<string, AddressRecord37>();

  exportAddress0(record: AddressRecord37): AddressRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  retryAddress1(record: AddressRecord37): AddressRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  saveAddress2(record: AddressRecord37): AddressRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  summarizeAddress3(record: AddressRecord37): AddressRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  retryAddress4(record: AddressRecord37): AddressRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  summarizeAddress5(record: AddressRecord37): AddressRecord37 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

}
