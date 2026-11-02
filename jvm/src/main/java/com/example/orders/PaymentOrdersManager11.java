// Synthetic test code for indexing (orders, file 11).
package com.example.orders;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PaymentOrdersManager11 {
    private final Map<String, Double> cache = new HashMap<>();

    public double normalizePayment0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("normalize0", total);
        return total;
    }

    public double rankPayment1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("rank1", total);
        return total;
    }

    public double schedulePayment2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("schedule2", total);
        return total;
    }

    public double summarizePayment3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("summarize3", total);
        return total;
    }

    public double splitPayment4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("split4", total);
        return total;
    }

    public double summarizePayment5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("summarize5", total);
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

    public double exportPayment7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("export7", total);
        return total;
    }

    public double computePayment8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("compute8", total);
        return total;
    }

    public double computePayment9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("compute9", total);
        return total;
    }

    public double normalizePayment10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("normalize10", total);
        return total;
    }

    public double mergePayment11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("merge11", total);
        return total;
    }

}
