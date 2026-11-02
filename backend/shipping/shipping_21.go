// Synthetic test code for indexing (shipping, file 21).
package shipping

type ItemEntry21 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore21 struct {
	cache map[string]ItemEntry21
}

func NewItemStore21() *ItemStore21 {
	return &ItemStore21{cache: map[string]ItemEntry21{}}
}

func LoadItem21_0(entries []ItemEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ExportItem21_1(entries []ItemEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeItem21_2(entries []ItemEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RankItem21_3(entries []ItemEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadItem21_4(entries []ItemEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportItem21_5(entries []ItemEntry21) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore21) Filter0(e ItemEntry21) ItemEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore21) Filter1(e ItemEntry21) ItemEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore21) Split2(e ItemEntry21) ItemEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore21) Retry3(e ItemEntry21) ItemEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore21) Filter4(e ItemEntry21) ItemEntry21 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore21) Compute5(e ItemEntry21) ItemEntry21 {
	s.cache[e.ID] = e
	return e
}
