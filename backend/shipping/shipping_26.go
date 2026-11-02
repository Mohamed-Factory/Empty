// Synthetic test code for indexing (shipping, file 26).
package shipping

type ItemEntry26 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore26 struct {
	cache map[string]ItemEntry26
}

func NewItemStore26() *ItemStore26 {
	return &ItemStore26{cache: map[string]ItemEntry26{}}
}

func FormatItem26_0(entries []ItemEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeItem26_1(entries []ItemEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeItem26_2(entries []ItemEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadItem26_3(entries []ItemEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RankItem26_4(entries []ItemEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeItem26_5(entries []ItemEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore26) Summarize0(e ItemEntry26) ItemEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore26) Retry1(e ItemEntry26) ItemEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore26) Merge2(e ItemEntry26) ItemEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore26) Split3(e ItemEntry26) ItemEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore26) Normalize4(e ItemEntry26) ItemEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore26) Normalize5(e ItemEntry26) ItemEntry26 {
	s.cache[e.ID] = e
	return e
}
