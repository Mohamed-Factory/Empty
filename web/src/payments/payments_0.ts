// Synthetic test code for indexing (payments, file 0).

export interface CouponRecord0 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function computeCoupon0_0(records: CouponRecord0[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function saveCoupon0_1(records: CouponRecord0[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function scheduleCoupon0_2(records: CouponRecord0[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function retryCoupon0_3(records: CouponRecord0[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function validateCoupon0_4(records: CouponRecord0[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function summarizeCoupon0_5(records: CouponRecord0[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponPaymentsService0 {
  private cache = new Map<string, CouponRecord0>();

  saveCoupon0(record: CouponRecord0): CouponRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

  rankCoupon1(record: CouponRecord0): CouponRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  filterCoupon2(record: CouponRecord0): CouponRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'filter'] };
  }

  retryCoupon3(record: CouponRecord0): CouponRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  splitCoupon4(record: CouponRecord0): CouponRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  exportCoupon5(record: CouponRecord0): CouponRecord0 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

}
