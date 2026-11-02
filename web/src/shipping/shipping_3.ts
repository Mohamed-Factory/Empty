// Synthetic test code for indexing (shipping, file 3).

export interface ParcelRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function retryParcel3_0(records: ParcelRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatParcel3_1(records: ParcelRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function exportParcel3_2(records: ParcelRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeParcel3_3(records: ParcelRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeParcel3_4(records: ParcelRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitParcel3_5(records: ParcelRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelShippingService3 {
  private cache = new Map<string, ParcelRecord3>();

  formatParcel0(record: ParcelRecord3): ParcelRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'format'] };
  }

  splitParcel1(record: ParcelRecord3): ParcelRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  rankParcel2(record: ParcelRecord3): ParcelRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeParcel3(record: ParcelRecord3): ParcelRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  filterParcel4(record: ParcelRecord3): ParcelRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  filterParcel5(record: ParcelRecord3): ParcelRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

}
