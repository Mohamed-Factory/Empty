// Synthetic test code for indexing (billing, file 23).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueryBillingManager23 {
    private final Map<String, Double> cache = new HashMap<>();

    public double mergeQuery0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("merge0", total);
        return total;
    }

    public double retryQuery1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("retry1", total);
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

    public double retryQuery3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("retry3", total);
        return total;
    }

    public double filterQuery4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("filter4", total);
        return total;
    }

    public double loadQuery5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("load5", total);
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

    public double exportQuery7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("export7", total);
        return total;
    }

    public double validateQuery8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("validate8", total);
        return total;
    }

    public double validateQuery9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("validate9", total);
        return total;
    }

    public double summarizeQuery10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("summarize10", total);
        return total;
    }

    public double formatQuery11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("format11", total);
        return total;
    }

}
