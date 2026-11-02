// Synthetic test code for indexing (billing, file 15).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EventBillingManager15 {
    private final Map<String, Double> cache = new HashMap<>();

    public double rankEvent0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("rank0", total);
        return total;
    }

    public double scheduleEvent1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("schedule1", total);
        return total;
    }

    public double rankEvent2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("rank2", total);
        return total;
    }

    public double formatEvent3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("format3", total);
        return total;
    }

    public double filterEvent4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("filter4", total);
        return total;
    }

    public double splitEvent5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("split5", total);
        return total;
    }

    public double exportEvent6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("export6", total);
        return total;
    }

    public double rankEvent7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("rank7", total);
        return total;
    }

    public double mergeEvent8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("merge8", total);
        return total;
    }

    public double saveEvent9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("save9", total);
        return total;
    }

    public double rankEvent10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("rank10", total);
        return total;
    }

    public double computeEvent11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("compute11", total);
        return total;
    }

}
