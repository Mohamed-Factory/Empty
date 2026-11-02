// Synthetic test code for indexing (orders, file 21).
package com.example.orders;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductOrdersManager21 {
    private final Map<String, Double> cache = new HashMap<>();

    public double splitProduct0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("split0", total);
        return total;
    }

    public double rankProduct1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("rank1", total);
        return total;
    }

    public double filterProduct2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("filter2", total);
        return total;
    }

    public double filterProduct3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("filter3", total);
        return total;
    }

    public double loadProduct4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("load4", total);
        return total;
    }

    public double exportProduct5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("export5", total);
        return total;
    }

    public double saveProduct6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("save6", total);
        return total;
    }

    public double computeProduct7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("compute7", total);
        return total;
    }

    public double retryProduct8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("retry8", total);
        return total;
    }

    public double retryProduct9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("retry9", total);
        return total;
    }

    public double filterProduct10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("filter10", total);
        return total;
    }

    public double scheduleProduct11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("schedule11", total);
        return total;
    }

}
