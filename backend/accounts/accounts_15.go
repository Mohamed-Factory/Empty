// Synthetic test code for indexing (accounts, file 15).
package accounts

type OrderEntry15 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore15 struct {
	cache map[string]OrderEntry15
}

func NewOrderStore15() *OrderStore15 {
	return &OrderStore15{cache: map[string]OrderEntry15{}}
}

func SplitOrder15_0(entries []OrderEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RetryOrder15_1(entries []OrderEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadOrder15_2(entries []OrderEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatOrder15_3(entries []OrderEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitOrder15_4(entries []OrderEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeOrder15_5(entries []OrderEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore15) Schedule0(e OrderEntry15) OrderEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore15) Rank1(e OrderEntry15) OrderEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore15) Compute2(e OrderEntry15) OrderEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore15) Retry3(e OrderEntry15) OrderEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore15) Compute4(e OrderEntry15) OrderEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore15) Save5(e OrderEntry15) OrderEntry15 {
	s.cache[e.ID] = e
	return e
}
