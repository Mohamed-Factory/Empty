// Synthetic test code for indexing (shipping, file 16).
package shipping

type AccountEntry16 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AccountStore16 struct {
	cache map[string]AccountEntry16
}

func NewAccountStore16() *AccountStore16 {
	return &AccountStore16{cache: map[string]AccountEntry16{}}
}

func RankAccount16_0(entries []AccountEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RankAccount16_1(entries []AccountEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeAccount16_2(entries []AccountEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveAccount16_3(entries []AccountEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatAccount16_4(entries []AccountEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FilterAccount16_5(entries []AccountEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AccountStore16) Save0(e AccountEntry16) AccountEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore16) Compute1(e AccountEntry16) AccountEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore16) Merge2(e AccountEntry16) AccountEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore16) Normalize3(e AccountEntry16) AccountEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore16) Normalize4(e AccountEntry16) AccountEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore16) Merge5(e AccountEntry16) AccountEntry16 {
	s.cache[e.ID] = e
	return e
}
