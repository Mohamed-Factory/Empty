// Synthetic test code for indexing (auth, file 14).

export interface ParcelRecord14 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeParcel14_0(records: ParcelRecord14[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryParcel14_1(records: ParcelRecord14[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function saveParcel14_2(records: ParcelRecord14[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function scheduleParcel14_3(records: ParcelRecord14[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryParcel14_4(records: ParcelRecord14[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeParcel14_5(records: ParcelRecord14[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelAuthService14 {
  private cache = new Map<string, ParcelRecord14>();

  scheduleParcel0(record: ParcelRecord14): ParcelRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

  saveParcel1(record: ParcelRecord14): ParcelRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeParcel2(record: ParcelRecord14): ParcelRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  validateParcel3(record: ParcelRecord14): ParcelRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  summarizeParcel4(record: ParcelRecord14): ParcelRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  mergeParcel5(record: ParcelRecord14): ParcelRecord14 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

}
