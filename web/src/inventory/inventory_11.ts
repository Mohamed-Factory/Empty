// Synthetic test code for indexing (inventory, file 11).

export interface AddressRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function exportAddress11_0(records: AddressRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitAddress11_1(records: AddressRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankAddress11_2(records: AddressRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryAddress11_3(records: AddressRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeAddress11_4(records: AddressRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterAddress11_5(records: AddressRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class AddressInventoryService11 {
  private cache = new Map<string, AddressRecord11>();

  exportAddress0(record: AddressRecord11): AddressRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  saveAddress1(record: AddressRecord11): AddressRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  summarizeAddress2(record: AddressRecord11): AddressRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  loadAddress3(record: AddressRecord11): AddressRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  computeAddress4(record: AddressRecord11): AddressRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  computeAddress5(record: AddressRecord11): AddressRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

}
