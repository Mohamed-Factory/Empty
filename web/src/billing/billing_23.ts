// Synthetic test code for indexing (billing, file 23).

export interface CouponRecord23 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeCoupon23_0(records: CouponRecord23[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitCoupon23_1(records: CouponRecord23[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function splitCoupon23_2(records: CouponRecord23[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function normalizeCoupon23_3(records: CouponRecord23[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportCoupon23_4(records: CouponRecord23[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function scheduleCoupon23_5(records: CouponRecord23[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponBillingService23 {
  private cache = new Map<string, CouponRecord23>();

  loadCoupon0(record: CouponRecord23): CouponRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  rankCoupon1(record: CouponRecord23): CouponRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  rankCoupon2(record: CouponRecord23): CouponRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  rankCoupon3(record: CouponRecord23): CouponRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  saveCoupon4(record: CouponRecord23): CouponRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  loadCoupon5(record: CouponRecord23): CouponRecord23 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

}
