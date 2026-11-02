// Synthetic test code for indexing (billing, file 9).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OrderBillingManager9 {
    private final Map<String, Double> cache = new HashMap<>();

    public double filterOrder0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("filter0", total);
        return total;
    }

    public double scheduleOrder1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("schedule1", total);
        return total;
    }

    public double normalizeOrder2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("normalize2", total);
        return total;
    }

    public double exportOrder3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("export3", total);
        return total;
    }

    public double formatOrder4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("format4", total);
        return total;
    }

    public double retryOrder5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("retry5", total);
        return total;
    }

    public double retryOrder6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("retry6", total);
        return total;
    }

    public double computeOrder7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("compute7", total);
        return total;
    }

    public double filterOrder8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("filter8", total);
        return total;
    }

    public double retryOrder9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("retry9", total);
        return total;
    }

    public double mergeOrder10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("merge10", total);
        return total;
    }

    public double computeOrder11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("compute11", total);
        return total;
    }

}
