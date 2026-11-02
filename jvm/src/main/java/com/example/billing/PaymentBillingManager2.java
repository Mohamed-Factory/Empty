// Synthetic test code for indexing (billing, file 2).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PaymentBillingManager2 {
    private final Map<String, Double> cache = new HashMap<>();

    public double computePayment0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("compute0", total);
        return total;
    }

    public double schedulePayment1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("schedule1", total);
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

    public double splitPayment3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("split3", total);
        return total;
    }

    public double savePayment4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("save4", total);
        return total;
    }

    public double retryPayment5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("retry5", total);
        return total;
    }

    public double rankPayment6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("rank6", total);
        return total;
    }

    public double schedulePayment7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("schedule7", total);
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

    public double savePayment9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("save9", total);
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

    public double validatePayment11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("validate11", total);
        return total;
    }

}
