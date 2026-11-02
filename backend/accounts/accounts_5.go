// Synthetic test code for indexing (accounts, file 5).
package accounts

type ReportEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ReportStore5 struct {
	cache map[string]ReportEntry5
}

func NewReportStore5() *ReportStore5 {
	return &ReportStore5{cache: map[string]ReportEntry5{}}
}

func LoadReport5_0(entries []ReportEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeReport5_1(entries []ReportEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RankReport5_2(entries []ReportEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeReport5_3(entries []ReportEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func MergeReport5_4(entries []ReportEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RankReport5_5(entries []ReportEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ReportStore5) Format0(e ReportEntry5) ReportEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore5) Compute1(e ReportEntry5) ReportEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore5) Summarize2(e ReportEntry5) ReportEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore5) Format3(e ReportEntry5) ReportEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore5) Retry4(e ReportEntry5) ReportEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore5) Load5(e ReportEntry5) ReportEntry5 {
	s.cache[e.ID] = e
	return e
}
