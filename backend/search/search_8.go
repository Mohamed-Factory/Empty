// Synthetic test code for indexing (search, file 8).
package search

type AccountEntry8 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AccountStore8 struct {
	cache map[string]AccountEntry8
}

func NewAccountStore8() *AccountStore8 {
	return &AccountStore8{cache: map[string]AccountEntry8{}}
}

func ComputeAccount8_0(entries []AccountEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ValidateAccount8_1(entries []AccountEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveAccount8_2(entries []AccountEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ValidateAccount8_3(entries []AccountEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterAccount8_4(entries []AccountEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeAccount8_5(entries []AccountEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AccountStore8) Export0(e AccountEntry8) AccountEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore8) Retry1(e AccountEntry8) AccountEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore8) Compute2(e AccountEntry8) AccountEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore8) Compute3(e AccountEntry8) AccountEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore8) Summarize4(e AccountEntry8) AccountEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore8) Save5(e AccountEntry8) AccountEntry8 {
	s.cache[e.ID] = e
	return e
}
