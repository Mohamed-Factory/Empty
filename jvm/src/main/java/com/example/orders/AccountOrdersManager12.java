// Synthetic test code for indexing (orders, file 12).
package com.example.orders;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AccountOrdersManager12 {
    private final Map<String, Double> cache = new HashMap<>();

    public double formatAccount0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("format0", total);
        return total;
    }

    public double computeAccount1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("compute1", total);
        return total;
    }

    public double scheduleAccount2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("schedule2", total);
        return total;
    }

    public double retryAccount3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("retry3", total);
        return total;
    }

    public double saveAccount4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("save4", total);
        return total;
    }

    public double loadAccount5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("load5", total);
        return total;
    }

    public double retryAccount6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("retry6", total);
        return total;
    }

    public double rankAccount7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("rank7", total);
        return total;
    }

    public double splitAccount8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("split8", total);
        return total;
    }

    public double filterAccount9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("filter9", total);
        return total;
    }

    public double retryAccount10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("retry10", total);
        return total;
    }

    public double loadAccount11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("load11", total);
        return total;
    }

}
