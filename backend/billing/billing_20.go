// Synthetic test code for indexing (billing, file 20).
package billing

type OrderEntry20 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore20 struct {
	cache map[string]OrderEntry20
}

func NewOrderStore20() *OrderStore20 {
	return &OrderStore20{cache: map[string]OrderEntry20{}}
}

func ComputeOrder20_0(entries []OrderEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatOrder20_1(entries []OrderEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeOrder20_2(entries []OrderEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ValidateOrder20_3(entries []OrderEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatOrder20_4(entries []OrderEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func NormalizeOrder20_5(entries []OrderEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore20) Schedule0(e OrderEntry20) OrderEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore20) Normalize1(e OrderEntry20) OrderEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore20) Save2(e OrderEntry20) OrderEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore20) Load3(e OrderEntry20) OrderEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore20) Rank4(e OrderEntry20) OrderEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore20) Filter5(e OrderEntry20) OrderEntry20 {
	s.cache[e.ID] = e
	return e
}
