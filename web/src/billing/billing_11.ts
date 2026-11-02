// Synthetic test code for indexing (billing, file 11).

export interface CouponRecord11 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterCoupon11_0(records: CouponRecord11[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitCoupon11_1(records: CouponRecord11[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function mergeCoupon11_2(records: CouponRecord11[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function computeCoupon11_3(records: CouponRecord11[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateCoupon11_4(records: CouponRecord11[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeCoupon11_5(records: CouponRecord11[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponBillingService11 {
  private cache = new Map<string, CouponRecord11>();

  normalizeCoupon0(record: CouponRecord11): CouponRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  saveCoupon1(record: CouponRecord11): CouponRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  retryCoupon2(record: CouponRecord11): CouponRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  loadCoupon3(record: CouponRecord11): CouponRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  exportCoupon4(record: CouponRecord11): CouponRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  saveCoupon5(record: CouponRecord11): CouponRecord11 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
