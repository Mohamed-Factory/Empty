// Synthetic test code for indexing (billing, file 18).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AccountBillingManager18 {
    private final Map<String, Double> cache = new HashMap<>();

    public double splitAccount0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("split0", total);
        return total;
    }

    public double normalizeAccount1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("normalize1", total);
        return total;
    }

    public double mergeAccount2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("merge2", total);
        return total;
    }

    public double rankAccount3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("rank3", total);
        return total;
    }

    public double scheduleAccount4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("schedule4", total);
        return total;
    }

    public double scheduleAccount5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("schedule5", total);
        return total;
    }

    public double summarizeAccount6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("summarize6", total);
        return total;
    }

    public double splitAccount7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("split7", total);
        return total;
    }

    public double filterAccount8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("filter8", total);
        return total;
    }

    public double scheduleAccount9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("schedule9", total);
        return total;
    }

    public double scheduleAccount10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("schedule10", total);
        return total;
    }

    public double validateAccount11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("validate11", total);
        return total;
    }

}
