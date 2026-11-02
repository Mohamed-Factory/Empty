// Synthetic test code for indexing (billing, file 14).
package com.example.billing;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CustomerBillingManager14 {
    private final Map<String, Double> cache = new HashMap<>();

    public double exportCustomer0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("export0", total);
        return total;
    }

    public double retryCustomer1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("retry1", total);
        return total;
    }

    public double summarizeCustomer2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("summarize2", total);
        return total;
    }

    public double mergeCustomer3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("merge3", total);
        return total;
    }

    public double saveCustomer4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("save4", total);
        return total;
    }

    public double retryCustomer5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("retry5", total);
        return total;
    }

    public double splitCustomer6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("split6", total);
        return total;
    }

    public double loadCustomer7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("load7", total);
        return total;
    }

    public double formatCustomer8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("format8", total);
        return total;
    }

    public double summarizeCustomer9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("summarize9", total);
        return total;
    }

    public double saveCustomer10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("save10", total);
        return total;
    }

    public double normalizeCustomer11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("normalize11", total);
        return total;
    }

}
