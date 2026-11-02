// Synthetic test code for indexing (shipping, file 20).
package shipping

type ItemEntry20 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore20 struct {
	cache map[string]ItemEntry20
}

func NewItemStore20() *ItemStore20 {
	return &ItemStore20{cache: map[string]ItemEntry20{}}
}

func ExportItem20_0(entries []ItemEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatItem20_1(entries []ItemEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ExportItem20_2(entries []ItemEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ExportItem20_3(entries []ItemEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ValidateItem20_4(entries []ItemEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeItem20_5(entries []ItemEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore20) Compute0(e ItemEntry20) ItemEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore20) Format1(e ItemEntry20) ItemEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore20) Schedule2(e ItemEntry20) ItemEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore20) Rank3(e ItemEntry20) ItemEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore20) Save4(e ItemEntry20) ItemEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore20) Schedule5(e ItemEntry20) ItemEntry20 {
	s.cache[e.ID] = e
	return e
}
