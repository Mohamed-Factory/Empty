// Synthetic test code for indexing (accounts, file 3).
package accounts

type CustomerEntry3 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CustomerStore3 struct {
	cache map[string]CustomerEntry3
}

func NewCustomerStore3() *CustomerStore3 {
	return &CustomerStore3{cache: map[string]CustomerEntry3{}}
}

func ComputeCustomer3_0(entries []CustomerEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitCustomer3_1(entries []CustomerEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeCustomer3_2(entries []CustomerEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleCustomer3_3(entries []CustomerEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveCustomer3_4(entries []CustomerEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeCustomer3_5(entries []CustomerEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CustomerStore3) Normalize0(e CustomerEntry3) CustomerEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore3) Export1(e CustomerEntry3) CustomerEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore3) Filter2(e CustomerEntry3) CustomerEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore3) Summarize3(e CustomerEntry3) CustomerEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore3) Save4(e CustomerEntry3) CustomerEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore3) Validate5(e CustomerEntry3) CustomerEntry3 {
	s.cache[e.ID] = e
	return e
}
