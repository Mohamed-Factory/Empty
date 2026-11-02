// Synthetic test code for indexing (payments, file 22).
package com.example.payments;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CouponPaymentsManager22 {
    private final Map<String, Double> cache = new HashMap<>();

    public double mergeCoupon0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("merge0", total);
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

    public double mergeCoupon2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("merge2", total);
        return total;
    }

    public double summarizeCoupon3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("summarize3", total);
        return total;
    }

    public double summarizeCoupon4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("summarize4", total);
        return total;
    }

    public double saveCoupon5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("save5", total);
        return total;
    }

    public double mergeCoupon6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("merge6", total);
        return total;
    }

    public double rankCoupon7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("rank7", total);
        return total;
    }

    public double normalizeCoupon8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("normalize8", total);
        return total;
    }

    public double filterCoupon9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("filter9", total);
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
