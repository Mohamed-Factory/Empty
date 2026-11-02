// Synthetic test code for indexing (auth, file 13).
package auth

type QuotaEntry13 struct {
	ID     string
	Amount float64
	Tags   []string
}

type QuotaStore13 struct {
	cache map[string]QuotaEntry13
}

func NewQuotaStore13() *QuotaStore13 {
	return &QuotaStore13{cache: map[string]QuotaEntry13{}}
}

func LoadQuota13_0(entries []QuotaEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeQuota13_1(entries []QuotaEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FilterQuota13_2(entries []QuotaEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ValidateQuota13_3(entries []QuotaEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RetryQuota13_4(entries []QuotaEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeQuota13_5(entries []QuotaEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *QuotaStore13) Merge0(e QuotaEntry13) QuotaEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore13) Merge1(e QuotaEntry13) QuotaEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore13) Merge2(e QuotaEntry13) QuotaEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore13) Summarize3(e QuotaEntry13) QuotaEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore13) Export4(e QuotaEntry13) QuotaEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore13) Load5(e QuotaEntry13) QuotaEntry13 {
	s.cache[e.ID] = e
	return e
}
