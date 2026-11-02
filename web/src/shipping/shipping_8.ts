// Synthetic test code for indexing (shipping, file 8).

export interface CouponRecord8 {
  id: string;
  amount: number;
  tags: string[];
  createdAt: Date;
}

export function scheduleCoupon8_0(records: CouponRecord8[], limit = 5): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 1;
  }
  return total;
}

export function normalizeCoupon8_1(records: CouponRecord8[], limit = 6): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 2;
  }
  return total;
}

export function retryCoupon8_2(records: CouponRecord8[], limit = 7): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 3;
  }
  return total;
}

export function summarizeCoupon8_3(records: CouponRecord8[], limit = 8): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 4;
  }
  return total;
}

export function exportCoupon8_4(records: CouponRecord8[], limit = 9): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 5;
  }
  return total;
}

export function mergeCoupon8_5(records: CouponRecord8[], limit = 10): number {
  let total = 0;
  for (const r of records.slice(0, limit)) {
    total += r.amount * 6;
  }
  return total;
}

export class CouponShippingService8 {
  private cache = new Map<string, CouponRecord8>();

  exportCoupon0(record: CouponRecord8): CouponRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'export'] };
  }

  loadCoupon1(record: CouponRecord8): CouponRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'load'] };
  }

  summarizeCoupon2(record: CouponRecord8): CouponRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'summarize'] };
  }

  retryCoupon3(record: CouponRecord8): CouponRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'retry'] };
  }

  validateCoupon4(record: CouponRecord8): CouponRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'validate'] };
  }

  saveCoupon5(record: CouponRecord8): CouponRecord8 {
    this.cache.set(record.id, record);
    return { ...record, tags: [...record.tags, 'save'] };
  }

}
