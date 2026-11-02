// Synthetic test code for indexing (shipping, file 11).
package com.example.shipping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CustomerShippingManager11 {
    private final Map<String, Double> cache = new HashMap<>();

    public double mergeCustomer0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("merge0", total);
        return total;
    }

    public double filterCustomer1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("filter1", total);
        return total;
    }

    public double retryCustomer2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("retry2", total);
        return total;
    }

    public double scheduleCustomer3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("schedule3", total);
        return total;
    }

    public double retryCustomer4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("retry4", total);
        return total;
    }

    public double exportCustomer5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("export5", total);
        return total;
    }

    public double scheduleCustomer6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("schedule6", total);
        return total;
    }

    public double filterCustomer7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("filter7", total);
        return total;
    }

    public double saveCustomer8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("save8", total);
        return total;
    }

    public double splitCustomer9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("split9", total);
        return total;
    }

    public double validateCustomer10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("validate10", total);
        return total;
    }

    public double formatCustomer11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("format11", total);
        return total;
    }

}
