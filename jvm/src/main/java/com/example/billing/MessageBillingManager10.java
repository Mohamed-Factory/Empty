// Synthetic test code for indexing (billing, file 10).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MessageBillingManager10 {
    private final Map<String, Double> cache = new HashMap<>();

    public double filterMessage0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("filter0", total);
        return total;
    }

    public double formatMessage1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("format1", total);
        return total;
    }

    public double rankMessage2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("rank2", total);
        return total;
    }

    public double retryMessage3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("retry3", total);
        return total;
    }

    public double scheduleMessage4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("schedule4", total);
        return total;
    }

    public double retryMessage5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("retry5", total);
        return total;
    }

    public double rankMessage6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("rank6", total);
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

    public double exportMessage8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("export8", total);
        return total;
    }

    public double validateMessage9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("validate9", total);
        return total;
    }

    public double rankMessage10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("rank10", total);
        return total;
    }

    public double saveMessage11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("save11", total);
        return total;
    }

}
