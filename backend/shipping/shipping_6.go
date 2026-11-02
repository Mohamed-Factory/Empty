// Synthetic test code for indexing (shipping, file 6).
package shipping

type AccountEntry6 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AccountStore6 struct {
	cache map[string]AccountEntry6
}

func NewAccountStore6() *AccountStore6 {
	return &AccountStore6{cache: map[string]AccountEntry6{}}
}

func LoadAccount6_0(entries []AccountEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeAccount6_1(entries []AccountEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ScheduleAccount6_2(entries []AccountEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeAccount6_3(entries []AccountEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadAccount6_4(entries []AccountEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveAccount6_5(entries []AccountEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AccountStore6) Save0(e AccountEntry6) AccountEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore6) Load1(e AccountEntry6) AccountEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore6) Validate2(e AccountEntry6) AccountEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore6) Retry3(e AccountEntry6) AccountEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore6) Format4(e AccountEntry6) AccountEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore6) Summarize5(e AccountEntry6) AccountEntry6 {
	s.cache[e.ID] = e
	return e
}
