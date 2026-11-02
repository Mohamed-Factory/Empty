// Synthetic test code for indexing (analytics, file 11).
package com.example.analytics;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RefundAnalyticsManager11 {
    private final Map<String, Double> cache = new HashMap<>();

    public double loadRefund0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("load0", total);
        return total;
    }

    public double filterRefund1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("filter1", total);
        return total;
    }

    public double loadRefund2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("load2", total);
        return total;
    }

    public double summarizeRefund3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("summarize3", total);
        return total;
    }

    public double retryRefund4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("retry4", total);
        return total;
    }

    public double saveRefund5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("save5", total);
        return total;
    }

    public double retryRefund6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("retry6", total);
        return total;
    }

    public double formatRefund7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("format7", total);
        return total;
    }

    public double formatRefund8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("format8", total);
        return total;
    }

    public double saveRefund9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("save9", total);
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

    public double rankRefund11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("rank11", total);
        return total;
    }

}
