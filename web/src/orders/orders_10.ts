// Synthetic test code for indexing (orders, file 10).

export interface ParcelRecord10 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeParcel10_0(records: ParcelRecord10[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function exportParcel10_1(records: ParcelRecord10[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeParcel10_2(records: ParcelRecord10[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeParcel10_3(records: ParcelRecord10[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function saveParcel10_4(records: ParcelRecord10[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function retryParcel10_5(records: ParcelRecord10[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelOrdersService10 {
  private cache = new Map<string, ParcelRecord10>();

  formatParcel0(record: ParcelRecord10): ParcelRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  filterParcel1(record: ParcelRecord10): ParcelRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  computeParcel2(record: ParcelRecord10): ParcelRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  retryParcel3(record: ParcelRecord10): ParcelRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  splitParcel4(record: ParcelRecord10): ParcelRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  exportParcel5(record: ParcelRecord10): ParcelRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
