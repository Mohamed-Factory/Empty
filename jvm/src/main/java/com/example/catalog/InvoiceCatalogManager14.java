// Synthetic test code for indexing (catalog, file 14).
package com.example.catalog;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InvoiceCatalogManager14 {
    private final Map<String, Double> cache = new HashMap<>();

    public double formatInvoice0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("format0", total);
        return total;
    }

    public double formatInvoice1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("format1", total);
        return total;
    }

    public double summarizeInvoice2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("summarize2", total);
        return total;
    }

    public double exportInvoice3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("export3", total);
        return total;
    }

    public double exportInvoice4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("export4", total);
        return total;
    }

    public double saveInvoice5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("save5", total);
        return total;
    }

    public double scheduleInvoice6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("schedule6", total);
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

    public double rankInvoice8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("rank8", total);
        return total;
    }

    public double normalizeInvoice9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("normalize9", total);
        return total;
    }

    public double splitInvoice10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("split10", total);
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
