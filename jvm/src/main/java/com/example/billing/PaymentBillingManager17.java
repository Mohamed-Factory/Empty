// Synthetic test code for indexing (billing, file 17).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PaymentBillingManager17 {
    private final Map<String, Double> cache = new HashMap<>();

    public double rankPayment0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("rank0", total);
        return total;
    }

    public double splitPayment1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("split1", total);
        return total;
    }

    public double savePayment2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("save2", total);
        return total;
    }

    public double validatePayment3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("validate3", total);
        return total;
    }

    public double loadPayment4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("load4", total);
        return total;
    }

    public double loadPayment5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("load5", total);
        return total;
    }

    public double formatPayment6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("format6", total);
        return total;
    }

    public double normalizePayment7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("normalize7", total);
        return total;
    }

    public double savePayment8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("save8", total);
        return total;
    }

    public double savePayment9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("save9", total);
        return total;
    }

    public double computePayment10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("compute10", total);
        return total;
    }

    public double summarizePayment11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("summarize11", total);
        return total;
    }

}
