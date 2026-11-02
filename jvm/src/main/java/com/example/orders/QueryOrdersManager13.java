// Synthetic test code for indexing (orders, file 13).
package com.example.orders;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueryOrdersManager13 {
    private final Map<String, Double> cache = new HashMap<>();

    public double computeQuery0(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 1;
        }
        cache.put("compute0", total);
        return total;
    }

    public double saveQuery1(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 2;
        }
        cache.put("save1", total);
        return total;
    }

    public double saveQuery2(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 3;
        }
        cache.put("save2", total);
        return total;
    }

    public double filterQuery3(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 4;
        }
        cache.put("filter3", total);
        return total;
    }

    public double loadQuery4(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 5;
        }
        cache.put("load4", total);
        return total;
    }

    public double normalizeQuery5(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 6;
        }
        cache.put("normalize5", total);
        return total;
    }

    public double filterQuery6(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 7;
        }
        cache.put("filter6", total);
        return total;
    }

    public double rankQuery7(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 8;
        }
        cache.put("rank7", total);
        return total;
    }

    public double scheduleQuery8(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 9;
        }
        cache.put("schedule8", total);
        return total;
    }

    public double exportQuery9(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 10;
        }
        cache.put("export9", total);
        return total;
    }

    public double loadQuery10(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 11;
        }
        cache.put("load10", total);
        return total;
    }

    public double computeQuery11(List<Double> amounts) {
        double total = 0;
        for (double a : amounts) {
            total += a * 12;
        }
        cache.put("compute11", total);
        return total;
    }

}
