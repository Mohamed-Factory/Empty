// Synthetic test code for indexing (billing, file 5).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueryBillingManager5 {
    private final Map<String, Double> cache = new HashMap<>();

    public double normalizeQuery0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("normalize0", total);
        return total;
    }

    public double filterQuery1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("filter1", total);
        return total;
    }

    public double validateQuery2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("validate2", total);
        return total;
    }

    public double computeQuery3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("compute3", total);
        return total;
    }

    public double normalizeQuery4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("normalize4", total);
        return total;
    }

    public double rankQuery5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("rank5", total);
        return total;
    }

    public double formatQuery6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("format6", total);
        return total;
    }

    public double normalizeQuery7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("normalize7", total);
        return total;
    }

    public double formatQuery8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("format8", total);
        return total;
    }

    public double rankQuery9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("rank9", total);
        return total;
    }

    public double loadQuery10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("load10", total);
        return total;
    }

    public double retryQuery11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("retry11", total);
        return total;
    }

}
