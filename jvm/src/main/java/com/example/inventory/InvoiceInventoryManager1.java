// Synthetic test code for indexing (inventory, file 1).
package com.example.inventory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InvoiceInventoryManager1 {
    private final Map<String, Double> cache = new HashMap<>();

    public double scheduleInvoice0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("schedule0", total);
        return total;
    }

    public double scheduleInvoice1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("schedule1", total);
        return total;
    }

    public double mergeInvoice2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("merge2", total);
        return total;
    }

    public double filterInvoice3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("filter3", total);
        return total;
    }

    public double filterInvoice4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("filter4", total);
        return total;
    }

    public double validateInvoice5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("validate5", total);
        return total;
    }

    public double filterInvoice6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("filter6", total);
        return total;
    }

    public double computeInvoice7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("compute7", total);
        return total;
    }

    public double exportInvoice8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("export8", total);
        return total;
    }

    public double retryInvoice9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("retry9", total);
        return total;
    }

    public double normalizeInvoice10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("normalize10", total);
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
