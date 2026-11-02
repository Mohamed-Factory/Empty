// Synthetic test code for indexing (shipping, file 12).

export interface AddressRecord12 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterAddress12_0(records: AddressRecord12[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeAddress12_1(records: AddressRecord12[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeAddress12_2(records: AddressRecord12[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeAddress12_3(records: AddressRecord12[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateAddress12_4(records: AddressRecord12[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportAddress12_5(records: AddressRecord12[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressShippingService12 {
  private cache = new Map<string, AddressRecord12>();

  formatAddress0(record: AddressRecord12): AddressRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  scheduleAddress1(record: AddressRecord12): AddressRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  exportAddress2(record: AddressRecord12): AddressRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  scheduleAddress3(record: AddressRecord12): AddressRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  saveAddress4(record: AddressRecord12): AddressRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  formatAddress5(record: AddressRecord12): AddressRecord12 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

}
