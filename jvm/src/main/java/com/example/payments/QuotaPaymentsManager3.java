// Synthetic test code for indexing (payments, file 3).
package com.example.payments;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QuotaPaymentsManager3 {
    private final Map<String, Double> cache = new HashMap<>();

    public double computeQuota0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("compute0", total);
        return total;
    }

    public double retryQuota1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("retry1", total);
        return total;
    }

    public double loadQuota2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("load2", total);
        return total;
    }

    public double mergeQuota3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("merge3", total);
        return total;
    }

    public double scheduleQuota4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("schedule4", total);
        return total;
    }

    public double exportQuota5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("export5", total);
        return total;
    }

    public double filterQuota6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("filter6", total);
        return total;
    }

    public double splitQuota7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("split7", total);
        return total;
    }

    public double exportQuota8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("export8", total);
        return total;
    }

    public double splitQuota9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("split9", total);
        return total;
    }

    public double retryQuota10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("retry10", total);
        return total;
    }

    public double scheduleQuota11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("schedule11", total);
        return total;
    }

}
