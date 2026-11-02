// Synthetic test code for indexing (shipping, file 4).
package shipping

type ReportEntry4 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ReportStore4 struct {
	cache map[string]ReportEntry4
}

func NewReportStore4() *ReportStore4 {
	return &ReportStore4{cache: map[string]ReportEntry4{}}
}

func RetryReport4_0(entries []ReportEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SummarizeReport4_1(entries []ReportEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeReport4_2(entries []ReportEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadReport4_3(entries []ReportEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RankReport4_4(entries []ReportEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveReport4_5(entries []ReportEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ReportStore4) Compute0(e ReportEntry4) ReportEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore4) Rank1(e ReportEntry4) ReportEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore4) Rank2(e ReportEntry4) ReportEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore4) Retry3(e ReportEntry4) ReportEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore4) Compute4(e ReportEntry4) ReportEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore4) Export5(e ReportEntry4) ReportEntry4 {
	s.cache[e.ID] = e
	return e
}
