// Synthetic test code for indexing (accounts, file 13).

export interface AddressRecord13 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function splitAddress13_0(records: AddressRecord13[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function computeAddress13_1(records: AddressRecord13[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitAddress13_2(records: AddressRecord13[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleAddress13_3(records: AddressRecord13[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryAddress13_4(records: AddressRecord13[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeAddress13_5(records: AddressRecord13[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressAccountsService13 {
  private cache = new Map<string, AddressRecord13>();

  mergeAddress0(record: AddressRecord13): AddressRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportAddress1(record: AddressRecord13): AddressRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitAddress2(record: AddressRecord13): AddressRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  formatAddress3(record: AddressRecord13): AddressRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  normalizeAddress4(record: AddressRecord13): AddressRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  validateAddress5(record: AddressRecord13): AddressRecord13 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

}
