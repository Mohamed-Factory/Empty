// Synthetic test code for indexing (shipping, file 2).

export interface CouponRecord2 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveCoupon2_0(records: CouponRecord2[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function splitCoupon2_1(records: CouponRecord2[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function validateCoupon2_2(records: CouponRecord2[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function validateCoupon2_3(records: CouponRecord2[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function filterCoupon2_4(records: CouponRecord2[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function filterCoupon2_5(records: CouponRecord2[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponShippingService2 {
  private cache = new Map<string, CouponRecord2>();

  filterCoupon0(record: CouponRecord2): CouponRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryCoupon1(record: CouponRecord2): CouponRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  saveCoupon2(record: CouponRecord2): CouponRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  saveCoupon3(record: CouponRecord2): CouponRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  filterCoupon4(record: CouponRecord2): CouponRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryCoupon5(record: CouponRecord2): CouponRecord2 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
