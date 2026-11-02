// Synthetic test code for indexing (payments, file 17).
package payments

type ItemEntry17 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore17 struct {
	cache map[string]ItemEntry17
}

func NewItemStore17() *ItemStore17 {
	return &ItemStore17{cache: map[string]ItemEntry17{}}
}

func SplitItem17_0(entries []ItemEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FilterItem17_1(entries []ItemEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ScheduleItem17_2(entries []ItemEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterItem17_3(entries []ItemEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveItem17_4(entries []ItemEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeItem17_5(entries []ItemEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore17) Normalize0(e ItemEntry17) ItemEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore17) Validate1(e ItemEntry17) ItemEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore17) Format2(e ItemEntry17) ItemEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore17) Schedule3(e ItemEntry17) ItemEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore17) Load4(e ItemEntry17) ItemEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore17) Save5(e ItemEntry17) ItemEntry17 {
	s.cache[e.ID] = e
	return e
}
