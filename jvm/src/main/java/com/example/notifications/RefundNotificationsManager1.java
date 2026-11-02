// Synthetic test code for indexing (notifications, file 1).
package com.example.notifications;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RefundNotificationsManager1 {
    private final Map<String, Double> cache = new HashMap<>();

    public double saveRefund0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("save0", total);
        return total;
    }

    public double mergeRefund1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("merge1", total);
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

    public double summarizeRefund3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("summarize3", total);
        return total;
    }

    public double splitRefund4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("split4", total);
        return total;
    }

    public double filterRefund5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("filter5", total);
        return total;
    }

    public double summarizeRefund6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("summarize6", total);
        return total;
    }

    public double summarizeRefund7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("summarize7", total);
        return total;
    }

    public double retryRefund8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("retry8", total);
        return total;
    }

    public double splitRefund9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("split9", total);
        return total;
    }

    public double exportRefund10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("export10", total);
        return total;
    }

    public double formatRefund11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("format11", total);
        return total;
    }

}
