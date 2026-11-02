// Synthetic test code for indexing (shipping, file 7).
package shipping

type ItemEntry7 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore7 struct {
	cache map[string]ItemEntry7
}

func NewItemStore7() *ItemStore7 {
	return &ItemStore7{cache: map[string]ItemEntry7{}}
}

func FilterItem7_0(entries []ItemEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ExportItem7_1(entries []ItemEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeItem7_2(entries []ItemEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatItem7_3(entries []ItemEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitItem7_4(entries []ItemEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitItem7_5(entries []ItemEntry7) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore7) Normalize0(e ItemEntry7) ItemEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore7) Rank1(e ItemEntry7) ItemEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore7) Split2(e ItemEntry7) ItemEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore7) Split3(e ItemEntry7) ItemEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore7) Merge4(e ItemEntry7) ItemEntry7 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore7) Load5(e ItemEntry7) ItemEntry7 {
	s.cache[e.ID] = e
	return e
}
