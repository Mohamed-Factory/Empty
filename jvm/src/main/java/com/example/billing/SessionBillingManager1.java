// Synthetic test code for indexing (billing, file 1).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SessionBillingManager1 {
    private final Map<String, Double> cache = new HashMap<>();

    public double rankSession0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("rank0", total);
        return total;
    }

    public double scheduleSession1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("schedule1", total);
        return total;
    }

    public double retrySession2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("retry2", total);
        return total;
    }

    public double normalizeSession3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("normalize3", total);
        return total;
    }

    public double exportSession4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("export4", total);
        return total;
    }

    public double summarizeSession5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("summarize5", total);
        return total;
    }

    public double loadSession6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("load6", total);
        return total;
    }

    public double filterSession7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("filter7", total);
        return total;
    }

    public double saveSession8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("save8", total);
        return total;
    }

    public double computeSession9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("compute9", total);
        return total;
    }

    public double rankSession10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("rank10", total);
        return total;
    }

    public double rankSession11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("rank11", total);
        return total;
    }

}
