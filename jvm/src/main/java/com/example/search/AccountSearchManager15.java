// Synthetic test code for indexing (search, file 15).
package com.example.search;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AccountSearchManager15 {
    private final Map<String, Double> cache = new HashMap<>();

    public double summarizeAccount0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("summarize0", total);
        return total;
    }

    public double rankAccount1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("rank1", total);
        return total;
    }

    public double filterAccount2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("filter2", total);
        return total;
    }

    public double filterAccount3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("filter3", total);
        return total;
    }

    public double computeAccount4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("compute4", total);
        return total;
    }

    public double saveAccount5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("save5", total);
        return total;
    }

    public double splitAccount6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("split6", total);
        return total;
    }

    public double loadAccount7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("load7", total);
        return total;
    }

    public double summarizeAccount8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("summarize8", total);
        return total;
    }

    public double exportAccount9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("export9", total);
        return total;
    }

    public double normalizeAccount10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("normalize10", total);
        return total;
    }

    public double mergeAccount11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("merge11", total);
        return total;
    }

}
