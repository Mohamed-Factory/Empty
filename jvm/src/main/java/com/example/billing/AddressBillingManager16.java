// Synthetic test code for indexing (billing, file 16).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AddressBillingManager16 {
    private final Map<String, Double> cache = new HashMap<>();

    public double loadAddress0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("load0", total);
        return total;
    }

    public double filterAddress1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("filter1", total);
        return total;
    }

    public double summarizeAddress2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("summarize2", total);
        return total;
    }

    public double mergeAddress3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("merge3", total);
        return total;
    }

    public double filterAddress4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("filter4", total);
        return total;
    }

    public double computeAddress5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("compute5", total);
        return total;
    }

    public double rankAddress6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("rank6", total);
        return total;
    }

    public double saveAddress7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("save7", total);
        return total;
    }

    public double rankAddress8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("rank8", total);
        return total;
    }

    public double exportAddress9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("export9", total);
        return total;
    }

    public double normalizeAddress10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("normalize10", total);
        return total;
    }

    public double scheduleAddress11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("schedule11", total);
        return total;
    }

}
