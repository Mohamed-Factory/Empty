// Synthetic test code for indexing (billing, file 11).
package billing

type QuotaEntry11 struct {
	ID     string
	Amount float64
	Tags   []string
}

type QuotaStore11 struct {
	cache map[string]QuotaEntry11
}

func NewQuotaStore11() *QuotaStore11 {
	return &QuotaStore11{cache: map[string]QuotaEntry11{}}
}

func RankQuota11_0(entries []QuotaEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RetryQuota11_1(entries []QuotaEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeQuota11_2(entries []QuotaEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SplitQuota11_3(entries []QuotaEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveQuota11_4(entries []QuotaEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeQuota11_5(entries []QuotaEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *QuotaStore11) Compute0(e QuotaEntry11) QuotaEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore11) Rank1(e QuotaEntry11) QuotaEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore11) Validate2(e QuotaEntry11) QuotaEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore11) Format3(e QuotaEntry11) QuotaEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore11) Export4(e QuotaEntry11) QuotaEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore11) Validate5(e QuotaEntry11) QuotaEntry11 {
	s.cache[e.ID] = e
	return e
}
