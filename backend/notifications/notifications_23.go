// Synthetic test code for indexing (notifications, file 23).
package notifications

type OrderEntry23 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore23 struct {
	cache map[string]OrderEntry23
}

func NewOrderStore23() *OrderStore23 {
	return &OrderStore23{cache: map[string]OrderEntry23{}}
}

func SummarizeOrder23_0(entries []OrderEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeOrder23_1(entries []OrderEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitOrder23_2(entries []OrderEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleOrder23_3(entries []OrderEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleOrder23_4(entries []OrderEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ScheduleOrder23_5(entries []OrderEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore23) Validate0(e OrderEntry23) OrderEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore23) Summarize1(e OrderEntry23) OrderEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore23) Summarize2(e OrderEntry23) OrderEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore23) Format3(e OrderEntry23) OrderEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore23) Compute4(e OrderEntry23) OrderEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore23) Save5(e OrderEntry23) OrderEntry23 {
	s.cache[e.ID] = e
	return e
}
