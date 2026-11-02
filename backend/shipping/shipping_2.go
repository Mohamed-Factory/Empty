// Synthetic test code for indexing (shipping, file 2).
package shipping

type CustomerEntry2 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CustomerStore2 struct {
	cache map[string]CustomerEntry2
}

func NewCustomerStore2() *CustomerStore2 {
	return &CustomerStore2{cache: map[string]CustomerEntry2{}}
}

func RetryCustomer2_0(entries []CustomerEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveCustomer2_1(entries []CustomerEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitCustomer2_2(entries []CustomerEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatCustomer2_3(entries []CustomerEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeCustomer2_4(entries []CustomerEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ScheduleCustomer2_5(entries []CustomerEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CustomerStore2) Format0(e CustomerEntry2) CustomerEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore2) Load1(e CustomerEntry2) CustomerEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore2) Summarize2(e CustomerEntry2) CustomerEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore2) Export3(e CustomerEntry2) CustomerEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore2) Retry4(e CustomerEntry2) CustomerEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore2) Merge5(e CustomerEntry2) CustomerEntry2 {
	s.cache[e.ID] = e
	return e
}
