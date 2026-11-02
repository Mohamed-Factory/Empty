// Synthetic test code for indexing (billing, file 18).
package billing

type ItemEntry18 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore18 struct {
	cache map[string]ItemEntry18
}

func NewItemStore18() *ItemStore18 {
	return &ItemStore18{cache: map[string]ItemEntry18{}}
}

func MergeItem18_0(entries []ItemEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatItem18_1(entries []ItemEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeItem18_2(entries []ItemEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveItem18_3(entries []ItemEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RetryItem18_4(entries []ItemEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitItem18_5(entries []ItemEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore18) Export0(e ItemEntry18) ItemEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore18) Summarize1(e ItemEntry18) ItemEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore18) Export2(e ItemEntry18) ItemEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore18) Load3(e ItemEntry18) ItemEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore18) Rank4(e ItemEntry18) ItemEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore18) Export5(e ItemEntry18) ItemEntry18 {
	s.cache[e.ID] = e
	return e
}
