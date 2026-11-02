// Synthetic test code for indexing (orders, file 1).
package com.example.orders;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PaymentOrdersManager1 {
    private final Map<String, Double> cache = new HashMap<>();

    public double schedulePayment0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("schedule0", total);
        return total;
    }

    public double savePayment1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("save1", total);
        return total;
    }

    public double rankPayment2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("rank2", total);
        return total;
    }

    public double formatPayment3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("format3", total);
        return total;
    }

    public double mergePayment4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("merge4", total);
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

    public double computePayment6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("compute6", total);
        return total;
    }

    public double computePayment7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("compute7", total);
        return total;
    }

    public double validatePayment8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("validate8", total);
        return total;
    }

    public double normalizePayment9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("normalize9", total);
        return total;
    }

    public double validatePayment10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("validate10", total);
        return total;
    }

    public double normalizePayment11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("normalize11", total);
        return total;
    }

}
