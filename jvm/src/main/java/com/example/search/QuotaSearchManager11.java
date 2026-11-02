// Synthetic test code for indexing (search, file 11).
package com.example.search;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QuotaSearchManager11 {
    private final Map<String, Double> cache = new HashMap<>();

    public double retryQuota0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("retry0", total);
        return total;
    }

    public double filterQuota1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("filter1", total);
        return total;
    }

    public double saveQuota2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("save2", total);
        return total;
    }

    public double rankQuota3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("rank3", total);
        return total;
    }

    public double mergeQuota4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("merge4", total);
        return total;
    }

    public double splitQuota5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("split5", total);
        return total;
    }

    public double scheduleQuota6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("schedule6", total);
        return total;
    }

    public double scheduleQuota7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("schedule7", total);
        return total;
    }

    public double scheduleQuota8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("schedule8", total);
        return total;
    }

    public double scheduleQuota9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("schedule9", total);
        return total;
    }

    public double splitQuota10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("split10", total);
        return total;
    }

    public double rankQuota11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("rank11", total);
        return total;
    }

}
