// Synthetic test code for indexing (shipping, file 9).
package shipping

type ItemEntry9 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore9 struct {
	cache map[string]ItemEntry9
}

func NewItemStore9() *ItemStore9 {
	return &ItemStore9{cache: map[string]ItemEntry9{}}
}

func MergeItem9_0(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SummarizeItem9_1(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveItem9_2(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatItem9_3(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RetryItem9_4(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RankItem9_5(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore9) Format0(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Filter1(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Save2(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Format3(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Retry4(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Normalize5(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}
