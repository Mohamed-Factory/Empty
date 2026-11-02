// Synthetic test code for indexing (payments, file 31).

export interface AddressRecord31 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function formatAddress31_0(records: AddressRecord31[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function mergeAddress31_1(records: AddressRecord31[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryAddress31_2(records: AddressRecord31[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleAddress31_3(records: AddressRecord31[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function normalizeAddress31_4(records: AddressRecord31[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeAddress31_5(records: AddressRecord31[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressPaymentsService31 {
  private cache = new Map<string, AddressRecord31>();

  saveAddress0(record: AddressRecord31): AddressRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  formatAddress1(record: AddressRecord31): AddressRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  retryAddress2(record: AddressRecord31): AddressRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  formatAddress3(record: AddressRecord31): AddressRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  scheduleAddress4(record: AddressRecord31): AddressRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  saveAddress5(record: AddressRecord31): AddressRecord31 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
