// Synthetic test code for indexing (shipping, file 3).
package com.example.shipping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AccountShippingManager3 {
    private final Map<String, Double> cache = new HashMap<>();

    public double filterAccount0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("filter0", total);
        return total;
    }

    public double filterAccount1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("filter1", total);
        return total;
    }

    public double validateAccount2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("validate2", total);
        return total;
    }

    public double validateAccount3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("validate3", total);
        return total;
    }

    public double rankAccount4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("rank4", total);
        return total;
    }

    public double summarizeAccount5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("summarize5", total);
        return total;
    }

    public double loadAccount6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("load6", total);
        return total;
    }

    public double filterAccount7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("filter7", total);
        return total;
    }

    public double validateAccount8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("validate8", total);
        return total;
    }

    public double loadAccount9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("load9", total);
        return total;
    }

    public double validateAccount10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("validate10", total);
        return total;
    }

    public double formatAccount11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("format11", total);
        return total;
    }

}
