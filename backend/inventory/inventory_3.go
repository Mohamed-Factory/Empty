// Synthetic test code for indexing (inventory, file 3).
package inventory

type QuotaEntry3 struct {
	ID     string
	Amount float64
	Tags   []string
}

type QuotaStore3 struct {
	cache map[string]QuotaEntry3
}

func NewQuotaStore3() *QuotaStore3 {
	return &QuotaStore3{cache: map[string]QuotaEntry3{}}
}

func RankQuota3_0(entries []QuotaEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveQuota3_1(entries []QuotaEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeQuota3_2(entries []QuotaEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func NormalizeQuota3_3(entries []QuotaEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeQuota3_4(entries []QuotaEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeQuota3_5(entries []QuotaEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *QuotaStore3) Load0(e QuotaEntry3) QuotaEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore3) Normalize1(e QuotaEntry3) QuotaEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore3) Export2(e QuotaEntry3) QuotaEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore3) Filter3(e QuotaEntry3) QuotaEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore3) Validate4(e QuotaEntry3) QuotaEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore3) Merge5(e QuotaEntry3) QuotaEntry3 {
	s.cache[e.ID] = e
	return e
}
