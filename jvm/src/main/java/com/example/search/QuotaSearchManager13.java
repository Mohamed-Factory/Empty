// Synthetic test code for indexing (search, file 13).
package com.example.search;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QuotaSearchManager13 {
    private final Map<String, Double> cache = new HashMap<>();

    public double computeQuota0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("compute0", total);
        return total;
    }

    public double scheduleQuota1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("schedule1", total);
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

    public double filterQuota3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("filter3", total);
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

    public double validateQuota5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("validate5", total);
        return total;
    }

    public double exportQuota6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("export6", total);
        return total;
    }

    public double mergeQuota7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("merge7", total);
        return total;
    }

    public double splitQuota8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("split8", total);
        return total;
    }

    public double filterQuota9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("filter9", total);
        return total;
    }

    public double scheduleQuota10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("schedule10", total);
        return total;
    }

    public double loadQuota11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("load11", total);
        return total;
    }

}
