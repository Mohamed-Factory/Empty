// Synthetic test code for indexing (analytics, file 2).
package com.example.analytics;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InvoiceAnalyticsManager2 {
    private final Map<String, Double> cache = new HashMap<>();

    public double filterInvoice0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("filter0", total);
        return total;
    }

    public double loadInvoice1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("load1", total);
        return total;
    }

    public double scheduleInvoice2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("schedule2", total);
        return total;
    }

    public double retryInvoice3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("retry3", total);
        return total;
    }

    public double mergeInvoice4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("merge4", total);
        return total;
    }

    public double filterInvoice5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("filter5", total);
        return total;
    }

    public double saveInvoice6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("save6", total);
        return total;
    }

    public double retryInvoice7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("retry7", total);
        return total;
    }

    public double saveInvoice8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("save8", total);
        return total;
    }

    public double filterInvoice9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("filter9", total);
        return total;
    }

    public double saveInvoice10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("save10", total);
        return total;
    }

    public double summarizeInvoice11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("summarize11", total);
        return total;
    }

}
