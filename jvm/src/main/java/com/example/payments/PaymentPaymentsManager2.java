// Synthetic test code for indexing (payments, file 2).
package com.example.payments;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PaymentPaymentsManager2 {
    private final Map<String, Double> cache = new HashMap<>();

    public double loadPayment0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("load0", total);
        return total;
    }

    public double summarizePayment1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("summarize1", total);
        return total;
    }

    public double retryPayment2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("retry2", total);
        return total;
    }

    public double mergePayment3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("merge3", total);
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

    public double filterPayment5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("filter5", total);
        return total;
    }

    public double retryPayment6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("retry6", total);
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

    public double exportPayment8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("export8", total);
        return total;
    }

    public double formatPayment9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("format9", total);
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

    public double retryPayment11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("retry11", total);
        return total;
    }

}
