// Synthetic test code for indexing (billing, file 21).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MessageBillingManager21 {
    private final Map<String, Double> cache = new HashMap<>();

    public double saveMessage0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("save0", total);
        return total;
    }

    public double exportMessage1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("export1", total);
        return total;
    }

    public double exportMessage2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("export2", total);
        return total;
    }

    public double normalizeMessage3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("normalize3", total);
        return total;
    }

    public double saveMessage4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("save4", total);
        return total;
    }

    public double rankMessage5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("rank5", total);
        return total;
    }

    public double computeMessage6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("compute6", total);
        return total;
    }

    public double rankMessage7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("rank7", total);
        return total;
    }

    public double rankMessage8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("rank8", total);
        return total;
    }

    public double filterMessage9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("filter9", total);
        return total;
    }

    public double loadMessage10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("load10", total);
        return total;
    }

    public double loadMessage11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("load11", total);
        return total;
    }

}
