// Synthetic test code for indexing (auth, file 7).

export interface AddressRecord7 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeAddress7_0(records: AddressRecord7[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function loadAddress7_1(records: AddressRecord7[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function filterAddress7_2(records: AddressRecord7[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeAddress7_3(records: AddressRecord7[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeAddress7_4(records: AddressRecord7[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterAddress7_5(records: AddressRecord7[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressAuthService7 {
  private cache = new Map<string, AddressRecord7>();

  summarizeAddress0(record: AddressRecord7): AddressRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  exportAddress1(record: AddressRecord7): AddressRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  splitAddress2(record: AddressRecord7): AddressRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  formatAddress3(record: AddressRecord7): AddressRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  mergeAddress4(record: AddressRecord7): AddressRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  splitAddress5(record: AddressRecord7): AddressRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

}
