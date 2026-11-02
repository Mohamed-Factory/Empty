// Synthetic test code for indexing (orders, file 5).
package orders

type ItemEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore5 struct {
	cache map[string]ItemEntry5
}

func NewItemStore5() *ItemStore5 {
	return &ItemStore5{cache: map[string]ItemEntry5{}}
}

func SplitItem5_0(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SummarizeItem5_1(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeItem5_2(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RetryItem5_3(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeItem5_4(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatItem5_5(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore5) Export0(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Filter1(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Rank2(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Filter3(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Save4(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Validate5(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}
