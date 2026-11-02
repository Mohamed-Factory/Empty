// Synthetic test code for indexing (reports, file 2).
package reports

type OrderEntry2 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore2 struct {
	cache map[string]OrderEntry2
}

func NewOrderStore2() *OrderStore2 {
	return &OrderStore2{cache: map[string]OrderEntry2{}}
}

func FormatOrder2_0(entries []OrderEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitOrder2_1(entries []OrderEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryOrder2_2(entries []OrderEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatOrder2_3(entries []OrderEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleOrder2_4(entries []OrderEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FilterOrder2_5(entries []OrderEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore2) Summarize0(e OrderEntry2) OrderEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore2) Filter1(e OrderEntry2) OrderEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore2) Retry2(e OrderEntry2) OrderEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore2) Compute3(e OrderEntry2) OrderEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore2) Retry4(e OrderEntry2) OrderEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore2) Rank5(e OrderEntry2) OrderEntry2 {
	s.cache[e.ID] = e
	return e
}
