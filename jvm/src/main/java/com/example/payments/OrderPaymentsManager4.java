// Synthetic test code for indexing (payments, file 4).
package com.example.payments;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OrderPaymentsManager4 {
    private final Map<String, Double> cache = new HashMap<>();

    public double retryOrder0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("retry0", total);
        return total;
    }

    public double saveOrder1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("save1", total);
        return total;
    }

    public double summarizeOrder2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("summarize2", total);
        return total;
    }

    public double splitOrder3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("split3", total);
        return total;
    }

    public double scheduleOrder4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("schedule4", total);
        return total;
    }

    public double rankOrder5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("rank5", total);
        return total;
    }

    public double formatOrder6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("format6", total);
        return total;
    }

    public double exportOrder7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("export7", total);
        return total;
    }

    public double summarizeOrder8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("summarize8", total);
        return total;
    }

    public double normalizeOrder9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("normalize9", total);
        return total;
    }

    public double splitOrder10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("split10", total);
        return total;
    }

    public double filterOrder11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("filter11", total);
        return total;
    }

}
