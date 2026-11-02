// Synthetic test code for indexing (shipping, file 4).
package com.example.shipping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ReportShippingManager4 {
    private final Map<String, Double> cache = new HashMap<>();

    public double summarizeReport0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("summarize0", total);
        return total;
    }

    public double splitReport1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("split1", total);
        return total;
    }

    public double filterReport2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("filter2", total);
        return total;
    }

    public double filterReport3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("filter3", total);
        return total;
    }

    public double rankReport4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("rank4", total);
        return total;
    }

    public double loadReport5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("load5", total);
        return total;
    }

    public double scheduleReport6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("schedule6", total);
        return total;
    }

    public double scheduleReport7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("schedule7", total);
        return total;
    }

    public double rankReport8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("rank8", total);
        return total;
    }

    public double exportReport9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("export9", total);
        return total;
    }

    public double formatReport10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("format10", total);
        return total;
    }

    public double saveReport11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("save11", total);
        return total;
    }

}
