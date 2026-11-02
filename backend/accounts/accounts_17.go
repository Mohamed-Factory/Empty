// Synthetic test code for indexing (accounts, file 17).
package accounts

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

func FilterOrder17_0(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ScheduleOrder17_1(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ExportOrder17_2(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SplitOrder17_3(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleOrder17_4(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeOrder17_5(entries []OrderEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore17) Split0(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Filter1(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Schedule2(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Filter3(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Filter4(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore17) Summarize5(e OrderEntry17) OrderEntry17 {
	s.cache[e.ID] = e
	return e
}
