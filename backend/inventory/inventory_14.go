// Synthetic test code for indexing (inventory, file 14).
package inventory

type OrderEntry14 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore14 struct {
	cache map[string]OrderEntry14
}

func NewOrderStore14() *OrderStore14 {
	return &OrderStore14{cache: map[string]OrderEntry14{}}
}

func SplitOrder14_0(entries []OrderEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RankOrder14_1(entries []OrderEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ValidateOrder14_2(entries []OrderEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ComputeOrder14_3(entries []OrderEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatOrder14_4(entries []OrderEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatOrder14_5(entries []OrderEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore14) Export0(e OrderEntry14) OrderEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore14) Merge1(e OrderEntry14) OrderEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore14) Retry2(e OrderEntry14) OrderEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore14) Split3(e OrderEntry14) OrderEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore14) Schedule4(e OrderEntry14) OrderEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore14) Export5(e OrderEntry14) OrderEntry14 {
	s.cache[e.ID] = e
	return e
}
