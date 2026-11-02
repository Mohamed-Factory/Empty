// Synthetic test code for indexing (payments, file 16).
package payments

type OrderEntry16 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore16 struct {
	cache map[string]OrderEntry16
}

func NewOrderStore16() *OrderStore16 {
	return &OrderStore16{cache: map[string]OrderEntry16{}}
}

func ComputeOrder16_0(entries []OrderEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeOrder16_1(entries []OrderEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveOrder16_2(entries []OrderEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RetryOrder16_3(entries []OrderEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterOrder16_4(entries []OrderEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FilterOrder16_5(entries []OrderEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore16) Schedule0(e OrderEntry16) OrderEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore16) Export1(e OrderEntry16) OrderEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore16) Retry2(e OrderEntry16) OrderEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore16) Retry3(e OrderEntry16) OrderEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore16) Load4(e OrderEntry16) OrderEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore16) Merge5(e OrderEntry16) OrderEntry16 {
	s.cache[e.ID] = e
	return e
}
