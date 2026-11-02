// Synthetic test code for indexing (search, file 13).
package search

type ReportEntry13 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ReportStore13 struct {
	cache map[string]ReportEntry13
}

func NewReportStore13() *ReportStore13 {
	return &ReportStore13{cache: map[string]ReportEntry13{}}
}

func FormatReport13_0(entries []ReportEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitReport13_1(entries []ReportEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeReport13_2(entries []ReportEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatReport13_3(entries []ReportEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func NormalizeReport13_4(entries []ReportEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatReport13_5(entries []ReportEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ReportStore13) Split0(e ReportEntry13) ReportEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore13) Summarize1(e ReportEntry13) ReportEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore13) Filter2(e ReportEntry13) ReportEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore13) Normalize3(e ReportEntry13) ReportEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore13) Save4(e ReportEntry13) ReportEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ReportStore13) Merge5(e ReportEntry13) ReportEntry13 {
	s.cache[e.ID] = e
	return e
}
