// Synthetic test code for indexing (search, file 14).
package com.example.search;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PaymentSearchManager14 {
    private final Map<String, Double> cache = new HashMap<>();

    public double loadPayment0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("load0", total);
        return total;
    }

    public double filterPayment1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("filter1", total);
        return total;
    }

    public double summarizePayment2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("summarize2", total);
        return total;
    }

    public double computePayment3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("compute3", total);
        return total;
    }

    public double exportPayment4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("export4", total);
        return total;
    }

    public double splitPayment5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("split5", total);
        return total;
    }

    public double splitPayment6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("split6", total);
        return total;
    }

    public double mergePayment7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("merge7", total);
        return total;
    }

    public double retryPayment8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("retry8", total);
        return total;
    }

    public double mergePayment9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("merge9", total);
        return total;
    }

    public double retryPayment10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("retry10", total);
        return total;
    }

    public double rankPayment11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("rank11", total);
        return total;
    }

}
