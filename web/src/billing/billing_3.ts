// Synthetic test code for indexing (billing, file 3).

export interface CouponRecord3 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function mergeCoupon3_0(records: CouponRecord3[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function formatCoupon3_1(records: CouponRecord3[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateCoupon3_2(records: CouponRecord3[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeCoupon3_3(records: CouponRecord3[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function retryCoupon3_4(records: CouponRecord3[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeCoupon3_5(records: CouponRecord3[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponBillingService3 {
  private cache = new Map<string, CouponRecord3>();

  saveCoupon0(record: CouponRecord3): CouponRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveCoupon1(record: CouponRecord3): CouponRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  splitCoupon2(record: CouponRecord3): CouponRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  saveCoupon3(record: CouponRecord3): CouponRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  mergeCoupon4(record: CouponRecord3): CouponRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  exportCoupon5(record: CouponRecord3): CouponRecord3 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
