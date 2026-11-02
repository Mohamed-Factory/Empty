// Synthetic test code for indexing (shipping, file 2).
package com.example.shipping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AddressShippingManager2 {
    private final Map<String, Double> cache = new HashMap<>();

    public double rankAddress0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("rank0", total);
        return total;
    }

    public double normalizeAddress1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("normalize1", total);
        return total;
    }

    public double normalizeAddress2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("normalize2", total);
        return total;
    }

    public double computeAddress3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("compute3", total);
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

    public double validateAddress5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("validate5", total);
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

    public double exportAddress7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("export7", total);
        return total;
    }

    public double splitAddress8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("split8", total);
        return total;
    }

    public double loadAddress9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("load9", total);
        return total;
    }

    public double computeAddress10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("compute10", total);
        return total;
    }

    public double loadAddress11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("load11", total);
        return total;
    }

}
