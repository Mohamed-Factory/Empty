// Synthetic test code for indexing (payments, file 7).

export interface CouponRecord7 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function saveCoupon7_0(records: CouponRecord7[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeCoupon7_1(records: CouponRecord7[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankCoupon7_2(records: CouponRecord7[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function saveCoupon7_3(records: CouponRecord7[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function computeCoupon7_4(records: CouponRecord7[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function rankCoupon7_5(records: CouponRecord7[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponPaymentsService7 {
  private cache = new Map<string, CouponRecord7>();

  splitCoupon0(record: CouponRecord7): CouponRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  splitCoupon1(record: CouponRecord7): CouponRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'split'] };
  }

  mergeCoupon2(record: CouponRecord7): CouponRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  rankCoupon3(record: CouponRecord7): CouponRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  normalizeCoupon4(record: CouponRecord7): CouponRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  retryCoupon5(record: CouponRecord7): CouponRecord7 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

}
