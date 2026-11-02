// Synthetic test code for indexing (payments, file 13).
package payments

type ItemEntry13 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore13 struct {
	cache map[string]ItemEntry13
}

func NewItemStore13() *ItemStore13 {
	return &ItemStore13{cache: map[string]ItemEntry13{}}
}

func ExportItem13_0(entries []ItemEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ExportItem13_1(entries []ItemEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ValidateItem13_2(entries []ItemEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatItem13_3(entries []ItemEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveItem13_4(entries []ItemEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeItem13_5(entries []ItemEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore13) Filter0(e ItemEntry13) ItemEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore13) Compute1(e ItemEntry13) ItemEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore13) Export2(e ItemEntry13) ItemEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore13) Summarize3(e ItemEntry13) ItemEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore13) Filter4(e ItemEntry13) ItemEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore13) Summarize5(e ItemEntry13) ItemEntry13 {
	s.cache[e.ID] = e
	return e
}
