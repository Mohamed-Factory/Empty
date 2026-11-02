// Synthetic test code for indexing (notifications, file 1).

export interface AddressRecord1 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function summarizeAddress1_0(records: AddressRecord1[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatAddress1_1(records: AddressRecord1[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateAddress1_2(records: AddressRecord1[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryAddress1_3(records: AddressRecord1[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeAddress1_4(records: AddressRecord1[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function saveAddress1_5(records: AddressRecord1[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressNotificationsService1 {
  private cache = new Map<string, AddressRecord1>();

  saveAddress0(record: AddressRecord1): AddressRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  formatAddress1(record: AddressRecord1): AddressRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  normalizeAddress2(record: AddressRecord1): AddressRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  normalizeAddress3(record: AddressRecord1): AddressRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  computeAddress4(record: AddressRecord1): AddressRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankAddress5(record: AddressRecord1): AddressRecord1 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
