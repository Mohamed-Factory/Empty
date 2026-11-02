// Synthetic test code for indexing (billing, file 4).
package billing

type AccountEntry4 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AccountStore4 struct {
	cache map[string]AccountEntry4
}

func NewAccountStore4() *AccountStore4 {
	return &AccountStore4{cache: map[string]AccountEntry4{}}
}

func RankAccount4_0(entries []AccountEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ExportAccount4_1(entries []AccountEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryAccount4_2(entries []AccountEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func NormalizeAccount4_3(entries []AccountEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveAccount4_4(entries []AccountEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportAccount4_5(entries []AccountEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AccountStore4) Load0(e AccountEntry4) AccountEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore4) Filter1(e AccountEntry4) AccountEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore4) Format2(e AccountEntry4) AccountEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore4) Normalize3(e AccountEntry4) AccountEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore4) Normalize4(e AccountEntry4) AccountEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore4) Normalize5(e AccountEntry4) AccountEntry4 {
	s.cache[e.ID] = e
	return e
}
