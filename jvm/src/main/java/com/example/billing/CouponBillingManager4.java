// Synthetic test code for indexing (billing, file 4).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CouponBillingManager4 {
    private final Map<String, Double> cache = new HashMap<>();

    public double filterCoupon0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("filter0", total);
        return total;
    }

    public double rankCoupon1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("rank1", total);
        return total;
    }

    public double retryCoupon2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("retry2", total);
        return total;
    }

    public double validateCoupon3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("validate3", total);
        return total;
    }

    public double validateCoupon4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("validate4", total);
        return total;
    }

    public double validateCoupon5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("validate5", total);
        return total;
    }

    public double saveCoupon6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("save6", total);
        return total;
    }

    public double filterCoupon7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("filter7", total);
        return total;
    }

    public double exportCoupon8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("export8", total);
        return total;
    }

    public double splitCoupon9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("split9", total);
        return total;
    }

    public double filterCoupon10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("filter10", total);
        return total;
    }

    public double rankCoupon11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("rank11", total);
        return total;
    }

}
