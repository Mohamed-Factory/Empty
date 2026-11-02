// Synthetic test code for indexing (shipping, file 22).
package shipping

type OrderEntry22 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore22 struct {
	cache map[string]OrderEntry22
}

func NewOrderStore22() *OrderStore22 {
	return &OrderStore22{cache: map[string]OrderEntry22{}}
}

func SummarizeOrder22_0(entries []OrderEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatOrder22_1(entries []OrderEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeOrder22_2(entries []OrderEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeOrder22_3(entries []OrderEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func NormalizeOrder22_4(entries []OrderEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RankOrder22_5(entries []OrderEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore22) Retry0(e OrderEntry22) OrderEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore22) Validate1(e OrderEntry22) OrderEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore22) Merge2(e OrderEntry22) OrderEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore22) Split3(e OrderEntry22) OrderEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore22) Compute4(e OrderEntry22) OrderEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore22) Retry5(e OrderEntry22) OrderEntry22 {
	s.cache[e.ID] = e
	return e
}
