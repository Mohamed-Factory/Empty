// Synthetic test code for indexing (inventory, file 11).
package com.example.inventory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InvoiceInventoryManager11 {
    private final Map<String, Double> cache = new HashMap<>();

    public double loadInvoice0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("load0", total);
        return total;
    }

    public double splitInvoice1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("split1", total);
        return total;
    }

    public double normalizeInvoice2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("normalize2", total);
        return total;
    }

    public double scheduleInvoice3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("schedule3", total);
        return total;
    }

    public double splitInvoice4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("split4", total);
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

    public double splitInvoice6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("split6", total);
        return total;
    }

    public double normalizeInvoice7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("normalize7", total);
        return total;
    }

    public double splitInvoice8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("split8", total);
        return total;
    }

    public double mergeInvoice9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("merge9", total);
        return total;
    }

    public double summarizeInvoice10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("summarize10", total);
        return total;
    }

    public double splitInvoice11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("split11", total);
        return total;
    }

}
