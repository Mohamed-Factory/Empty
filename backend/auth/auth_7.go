// Synthetic test code for indexing (auth, file 7).
package auth

type AccountEntry7 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AccountStore7 struct {
	cache map[string]AccountEntry7
}

func NewAccountStore7() *AccountStore7 {
	return &AccountStore7{cache: map[string]AccountEntry7{}}
}

func RankAccount7_0(entries []AccountEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeAccount7_1(entries []AccountEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryAccount7_2(entries []AccountEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadAccount7_3(entries []AccountEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveAccount7_4(entries []AccountEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatAccount7_5(entries []AccountEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AccountStore7) Retry0(e AccountEntry7) AccountEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore7) Retry1(e AccountEntry7) AccountEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore7) Validate2(e AccountEntry7) AccountEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore7) Retry3(e AccountEntry7) AccountEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore7) Merge4(e AccountEntry7) AccountEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore7) Normalize5(e AccountEntry7) AccountEntry7 {
	s.cache[e.ID] = e
	return e
}
