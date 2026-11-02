// Synthetic test code for indexing (billing, file 9).
package billing

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

func ValidateItem9_0(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeItem9_1(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ValidateItem9_2(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeItem9_3(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveItem9_4(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateItem9_5(entries []ItemEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore9) Load0(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Split1(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Normalize2(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Schedule3(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Filter4(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore9) Normalize5(e ItemEntry9) ItemEntry9 {
	s.cache[e.ID] = e
	return e
}
