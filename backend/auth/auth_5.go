// Synthetic test code for indexing (auth, file 5).
package auth

type CustomerEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CustomerStore5 struct {
	cache map[string]CustomerEntry5
}

func NewCustomerStore5() *CustomerStore5 {
	return &CustomerStore5{cache: map[string]CustomerEntry5{}}
}

func FormatCustomer5_0(entries []CustomerEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func LoadCustomer5_1(entries []CustomerEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeCustomer5_2(entries []CustomerEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RetryCustomer5_3(entries []CustomerEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeCustomer5_4(entries []CustomerEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveCustomer5_5(entries []CustomerEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CustomerStore5) Split0(e CustomerEntry5) CustomerEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore5) Split1(e CustomerEntry5) CustomerEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore5) Retry2(e CustomerEntry5) CustomerEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore5) Format3(e CustomerEntry5) CustomerEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore5) Filter4(e CustomerEntry5) CustomerEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CustomerStore5) Split5(e CustomerEntry5) CustomerEntry5 {
	s.cache[e.ID] = e
	return e
}
