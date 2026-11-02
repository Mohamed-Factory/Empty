// Synthetic test code for indexing (payments, file 21).
package payments

type AccountEntry21 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AccountStore21 struct {
	cache map[string]AccountEntry21
}

func NewAccountStore21() *AccountStore21 {
	return &AccountStore21{cache: map[string]AccountEntry21{}}
}

func SaveAccount21_0(entries []AccountEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeAccount21_1(entries []AccountEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveAccount21_2(entries []AccountEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterAccount21_3(entries []AccountEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func MergeAccount21_4(entries []AccountEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeAccount21_5(entries []AccountEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AccountStore21) Compute0(e AccountEntry21) AccountEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore21) Merge1(e AccountEntry21) AccountEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore21) Split2(e AccountEntry21) AccountEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore21) Load3(e AccountEntry21) AccountEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore21) Compute4(e AccountEntry21) AccountEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *AccountStore21) Compute5(e AccountEntry21) AccountEntry21 {
	s.cache[e.ID] = e
	return e
}
