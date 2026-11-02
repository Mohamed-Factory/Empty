// Synthetic test code for indexing (auth, file 22).

export interface ParcelRecord22 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeParcel22_0(records: ParcelRecord22[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveParcel22_1(records: ParcelRecord22[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryParcel22_2(records: ParcelRecord22[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryParcel22_3(records: ParcelRecord22[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function formatParcel22_4(records: ParcelRecord22[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitParcel22_5(records: ParcelRecord22[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelAuthService22 {
  private cache = new Map<string, ParcelRecord22>();

  normalizeParcel0(record: ParcelRecord22): ParcelRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  mergeParcel1(record: ParcelRecord22): ParcelRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  computeParcel2(record: ParcelRecord22): ParcelRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  rankParcel3(record: ParcelRecord22): ParcelRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  splitParcel4(record: ParcelRecord22): ParcelRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveParcel5(record: ParcelRecord22): ParcelRecord22 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
