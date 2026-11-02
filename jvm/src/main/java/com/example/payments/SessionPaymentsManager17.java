// Synthetic test code for indexing (payments, file 17).
package com.example.payments;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SessionPaymentsManager17 {
    private final Map<String, Double> cache = new HashMap<>();

    public double summarizeSession0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("summarize0", total);
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

    public double scheduleSession3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("schedule3", total);
        return total;
    }

    public double summarizeSession4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("summarize4", total);
        return total;
    }

    public double retrySession5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("retry5", total);
        return total;
    }

    public double filterSession6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("filter6", total);
        return total;
    }

    public double scheduleSession7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("schedule7", total);
        return total;
    }

    public double mergeSession8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("merge8", total);
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

    public double splitSession10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("split10", total);
        return total;
    }

    public double exportSession11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("export11", total);
        return total;
    }

}
