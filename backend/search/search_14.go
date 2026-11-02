// Synthetic test code for indexing (search, file 14).
package search

type AccountEntry14 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AccountStore14 struct {
	cache map[string]AccountEntry14
}

func NewAccountStore14() *AccountStore14 {
	return &AccountStore14{cache: map[string]AccountEntry14{}}
}

func ScheduleAccount14_0(entries []AccountEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeAccount14_1(entries []AccountEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeAccount14_2(entries []AccountEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ValidateAccount14_3(entries []AccountEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeAccount14_4(entries []AccountEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func LoadAccount14_5(entries []AccountEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AccountStore14) Load0(e AccountEntry14) AccountEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore14) Export1(e AccountEntry14) AccountEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore14) Summarize2(e AccountEntry14) AccountEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore14) Schedule3(e AccountEntry14) AccountEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore14) Schedule4(e AccountEntry14) AccountEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore14) Merge5(e AccountEntry14) AccountEntry14 {
	s.cache[e.ID] = e
	return e
}
