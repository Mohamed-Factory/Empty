// Synthetic test code for indexing (payments, file 2).
package payments

type QuotaEntry2 struct {
	ID     string
	Amount float64
	Tags   []string
}

type QuotaStore2 struct {
	cache map[string]QuotaEntry2
}

func NewQuotaStore2() *QuotaStore2 {
	return &QuotaStore2{cache: map[string]QuotaEntry2{}}
}

func FilterQuota2_0(entries []QuotaEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeQuota2_1(entries []QuotaEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FilterQuota2_2(entries []QuotaEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterQuota2_3(entries []QuotaEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ExportQuota2_4(entries []QuotaEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitQuota2_5(entries []QuotaEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *QuotaStore2) Save0(e QuotaEntry2) QuotaEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore2) Load1(e QuotaEntry2) QuotaEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore2) Load2(e QuotaEntry2) QuotaEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore2) Export3(e QuotaEntry2) QuotaEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore2) Schedule4(e QuotaEntry2) QuotaEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QuotaStore2) Validate5(e QuotaEntry2) QuotaEntry2 {
	s.cache[e.ID] = e
	return e
}
