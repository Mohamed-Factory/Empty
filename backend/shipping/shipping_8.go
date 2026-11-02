// Synthetic test code for indexing (shipping, file 8).
package shipping

type CustomerEntry8 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CustomerStore8 struct {
	cache map[string]CustomerEntry8
}

func NewCustomerStore8() *CustomerStore8 {
	return &CustomerStore8{cache: map[string]CustomerEntry8{}}
}

func RankCustomer8_0(entries []CustomerEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveCustomer8_1(entries []CustomerEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeCustomer8_2(entries []CustomerEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadCustomer8_3(entries []CustomerEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RankCustomer8_4(entries []CustomerEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ScheduleCustomer8_5(entries []CustomerEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CustomerStore8) Filter0(e CustomerEntry8) CustomerEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore8) Save1(e CustomerEntry8) CustomerEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore8) Retry2(e CustomerEntry8) CustomerEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore8) Schedule3(e CustomerEntry8) CustomerEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore8) Filter4(e CustomerEntry8) CustomerEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore8) Load5(e CustomerEntry8) CustomerEntry8 {
	s.cache[e.ID] = e
	return e
}
