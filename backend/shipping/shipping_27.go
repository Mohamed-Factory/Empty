// Synthetic test code for indexing (shipping, file 27).
package shipping

type OrderEntry27 struct {
	ID     string
	Amount float64
	Tags   []string
}

type OrderStore27 struct {
	cache map[string]OrderEntry27
}

func NewOrderStore27() *OrderStore27 {
	return &OrderStore27{cache: map[string]OrderEntry27{}}
}

func LoadOrder27_0(entries []OrderEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RankOrder27_1(entries []OrderEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeOrder27_2(entries []OrderEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveOrder27_3(entries []OrderEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleOrder27_4(entries []OrderEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeOrder27_5(entries []OrderEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *OrderStore27) Rank0(e OrderEntry27) OrderEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore27) Export1(e OrderEntry27) OrderEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore27) Format2(e OrderEntry27) OrderEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore27) Export3(e OrderEntry27) OrderEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore27) Schedule4(e OrderEntry27) OrderEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *OrderStore27) Format5(e OrderEntry27) OrderEntry27 {
	s.cache[e.ID] = e
	return e
}
