// Synthetic test code for indexing (catalog, file 17).
package catalog

type OrderEntry17 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore17 struct {
	cache map[string]OrderEntry17
}

func NewOrderStore17() *OrderStore17 {
	return &OrderStore17{cache: map[string]OrderEntry17{}}
}

func ComputeOrder17_0(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatOrder17_1(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveOrder17_2(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterOrder17_3(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterOrder17_4(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func LoadOrder17_5(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore17) Filter0(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Retry1(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Normalize2(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Load3(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Load4(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Merge5(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}
