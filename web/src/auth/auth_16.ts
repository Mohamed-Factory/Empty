// Synthetic test code for indexing (auth, file 16).

export interface ParcelRecord16 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleParcel16_0(records: ParcelRecord16[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function retryParcel16_1(records: ParcelRecord16[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function summarizeParcel16_2(records: ParcelRecord16[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function mergeParcel16_3(records: ParcelRecord16[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeParcel16_4(records: ParcelRecord16[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function exportParcel16_5(records: ParcelRecord16[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class ParcelAuthService16 {
  private cache = new Map<string, ParcelRecord16>();

  summarizeParcel0(record: ParcelRecord16): ParcelRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  rankParcel1(record: ParcelRecord16): ParcelRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  exportParcel2(record: ParcelRecord16): ParcelRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  rankParcel3(record: ParcelRecord16): ParcelRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  loadParcel4(record: ParcelRecord16): ParcelRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  rankParcel5(record: ParcelRecord16): ParcelRecord16 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

}
