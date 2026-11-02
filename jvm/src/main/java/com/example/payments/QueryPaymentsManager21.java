// Synthetic test code for indexing (payments, file 21).
package com.example.payments;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueryPaymentsManager21 {
    private final Map<String, Double> cache = new HashMap<>();

    public double retryQuery0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("retry0", total);
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

    public double mergeQuery2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("merge2", total);
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

    public double mergeQuery5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("merge5", total);
        return total;
    }

    public double scheduleQuery6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("schedule6", total);
        return total;
    }

    public double saveQuery7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("save7", total);
        return total;
    }

    public double scheduleQuery8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("schedule8", total);
        return total;
    }

    public double computeQuery9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("compute9", total);
        return total;
    }

    public double normalizeQuery10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("normalize10", total);
        return total;
    }

    public double scheduleQuery11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("schedule11", total);
        return total;
    }

}
