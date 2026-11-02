// Synthetic test code for indexing (billing, file 19).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CouponBillingManager19 {
    private final Map<String, Double> cache = new HashMap<>();

    public double rankCoupon0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("rank0", total);
        return total;
    }

    public double saveCoupon1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("save1", total);
        return total;
    }

    public double exportCoupon2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("export2", total);
        return total;
    }

    public double normalizeCoupon3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("normalize3", total);
        return total;
    }

    public double filterCoupon4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("filter4", total);
        return total;
    }

    public double splitCoupon5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("split5", total);
        return total;
    }

    public double formatCoupon6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("format6", total);
        return total;
    }

    public double loadCoupon7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("load7", total);
        return total;
    }

    public double scheduleCoupon8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("schedule8", total);
        return total;
    }

    public double mergeCoupon9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("merge9", total);
        return total;
    }

    public double computeCoupon10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("compute10", total);
        return total;
    }

    public double normalizeCoupon11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("normalize11", total);
        return total;
    }

}
