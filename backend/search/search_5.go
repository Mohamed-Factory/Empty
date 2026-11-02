// Synthetic test code for indexing (search, file 5).
package search

type OrderEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore5 struct {
	cache map[string]OrderEntry5
}

func NewOrderStore5() *OrderStore5 {
	return &OrderStore5{cache: map[string]OrderEntry5{}}
}

func SummarizeOrder5_0(entries []OrderEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RetryOrder5_1(entries []OrderEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitOrder5_2(entries []OrderEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RankOrder5_3(entries []OrderEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ExportOrder5_4(entries []OrderEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatOrder5_5(entries []OrderEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore5) Retry0(e OrderEntry5) OrderEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore5) Load1(e OrderEntry5) OrderEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore5) Compute2(e OrderEntry5) OrderEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore5) Export3(e OrderEntry5) OrderEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore5) Schedule4(e OrderEntry5) OrderEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore5) Merge5(e OrderEntry5) OrderEntry5 {
	s.cache[e.ID] = e
	return e
}
