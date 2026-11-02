// Synthetic test code for indexing (accounts, file 10).

export interface CouponRecord10 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function normalizeCoupon10_0(records: CouponRecord10[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function summarizeCoupon10_1(records: CouponRecord10[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function loadCoupon10_2(records: CouponRecord10[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeCoupon10_3(records: CouponRecord10[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function mergeCoupon10_4(records: CouponRecord10[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function splitCoupon10_5(records: CouponRecord10[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponAccountsService10 {
  private cache = new Map<string, CouponRecord10>();

  exportCoupon0(record: CouponRecord10): CouponRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  rankCoupon1(record: CouponRecord10): CouponRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'rank'] };
  }

  retryCoupon2(record: CouponRecord10): CouponRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateCoupon3(record: CouponRecord10): CouponRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  normalizeCoupon4(record: CouponRecord10): CouponRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  saveCoupon5(record: CouponRecord10): CouponRecord10 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
