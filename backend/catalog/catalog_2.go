// Synthetic test code for indexing (catalog, file 2).
package catalog

type QueryEntry2 struct {
	ID     string
	Amount float64
	Tags   []string
}

type QueryStore2 struct {
	cache map[string]QueryEntry2
}

func NewQueryStore2() *QueryStore2 {
	return &QueryStore2{cache: map[string]QueryEntry2{}}
}

func SplitQuery2_0(entries []QueryEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitQuery2_1(entries []QueryEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeQuery2_2(entries []QueryEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func NormalizeQuery2_3(entries []QueryEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeQuery2_4(entries []QueryEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeQuery2_5(entries []QueryEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *QueryStore2) Normalize0(e QueryEntry2) QueryEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QueryStore2) Summarize1(e QueryEntry2) QueryEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QueryStore2) Summarize2(e QueryEntry2) QueryEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QueryStore2) Export3(e QueryEntry2) QueryEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QueryStore2) Compute4(e QueryEntry2) QueryEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *QueryStore2) Split5(e QueryEntry2) QueryEntry2 {
	s.cache[e.ID] = e
	return e
}
