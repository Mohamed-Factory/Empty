// Synthetic test code for indexing (notifications, file 21).

export interface CouponRecord21 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function filterCoupon21_0(records: CouponRecord21[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function scheduleCoupon21_1(records: CouponRecord21[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function rankCoupon21_2(records: CouponRecord21[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function loadCoupon21_3(records: CouponRecord21[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function summarizeCoupon21_4(records: CouponRecord21[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function computeCoupon21_5(records: CouponRecord21[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponNotificationsService21 {
  private cache = new Map<string, CouponRecord21>();

  mergeCoupon0(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'merge'] };
  }

  normalizeCoupon1(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'normalize'] };
  }

  validateCoupon2(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  computeCoupon3(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'compute'] };
  }

  validateCoupon4(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  scheduleCoupon5(record: CouponRecord21): CouponRecord21 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'schedule'] };
  }

}
