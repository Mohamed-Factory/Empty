// Synthetic test code for indexing (payments, file 12).
package payments

type OrderEntry12 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore12 struct {
	cache map[string]OrderEntry12
}

func NewOrderStore12() *OrderStore12 {
	return &OrderStore12{cache: map[string]OrderEntry12{}}
}

func FilterOrder12_0(entries []OrderEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SummarizeOrder12_1(entries []OrderEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeOrder12_2(entries []OrderEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadOrder12_3(entries []OrderEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeOrder12_4(entries []OrderEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportOrder12_5(entries []OrderEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore12) Format0(e OrderEntry12) OrderEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore12) Export1(e OrderEntry12) OrderEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore12) Format2(e OrderEntry12) OrderEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore12) Split3(e OrderEntry12) OrderEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore12) Schedule4(e OrderEntry12) OrderEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore12) Merge5(e OrderEntry12) OrderEntry12 {
	s.cache[e.ID] = e
	return e
}
