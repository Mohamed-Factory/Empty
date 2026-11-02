// Synthetic test code for indexing (auth, file 4).
package com.example.auth;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RefundAuthManager4 {
    private final Map<String, Double> cache = new HashMap<>();

    public double filterRefund0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("filter0", total);
        return total;
    }

    public double splitRefund1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("split1", total);
        return total;
    }

    public double rankRefund2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("rank2", total);
        return total;
    }

    public double filterRefund3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("filter3", total);
        return total;
    }

    public double mergeRefund4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("merge4", total);
        return total;
    }

    public double summarizeRefund5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("summarize5", total);
        return total;
    }

    public double splitRefund6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("split6", total);
        return total;
    }

    public double normalizeRefund7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("normalize7", total);
        return total;
    }

    public double summarizeRefund8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("summarize8", total);
        return total;
    }

    public double loadRefund9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("load9", total);
        return total;
    }

    public double mergeRefund10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("merge10", total);
        return total;
    }

    public double mergeRefund11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("merge11", total);
        return total;
    }

}
