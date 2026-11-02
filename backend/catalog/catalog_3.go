// Synthetic test code for indexing (catalog, file 3).
package catalog

type ItemEntry3 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore3 struct {
	cache map[string]ItemEntry3
}

func NewItemStore3() *ItemStore3 {
	return &ItemStore3{cache: map[string]ItemEntry3{}}
}

func FilterItem3_0(entries []ItemEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ScheduleItem3_1(entries []ItemEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitItem3_2(entries []ItemEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeItem3_3(entries []ItemEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterItem3_4(entries []ItemEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RetryItem3_5(entries []ItemEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore3) Schedule0(e ItemEntry3) ItemEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore3) Retry1(e ItemEntry3) ItemEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore3) Schedule2(e ItemEntry3) ItemEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore3) Compute3(e ItemEntry3) ItemEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore3) Schedule4(e ItemEntry3) ItemEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore3) Save5(e ItemEntry3) ItemEntry3 {
	s.cache[e.ID] = e
	return e
}
