// Synthetic test code for indexing (billing, file 6).
package billing

type OrderEntry6 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore6 struct {
	cache map[string]OrderEntry6
}

func NewOrderStore6() *OrderStore6 {
	return &OrderStore6{cache: map[string]OrderEntry6{}}
}

func ValidateOrder6_0(entries []OrderEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ValidateOrder6_1(entries []OrderEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryOrder6_2(entries []OrderEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterOrder6_3(entries []OrderEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatOrder6_4(entries []OrderEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveOrder6_5(entries []OrderEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore6) Compute0(e OrderEntry6) OrderEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore6) Save1(e OrderEntry6) OrderEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore6) Summarize2(e OrderEntry6) OrderEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore6) Retry3(e OrderEntry6) OrderEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore6) Split4(e OrderEntry6) OrderEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore6) Filter5(e OrderEntry6) OrderEntry6 {
	s.cache[e.ID] = e
	return e
}
