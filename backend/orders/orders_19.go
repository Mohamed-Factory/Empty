// Synthetic test code for indexing (orders, file 19).
package orders

type ItemEntry19 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ItemStore19 struct {
	cache map[string]ItemEntry19
}

func NewItemStore19() *ItemStore19 {
	return &ItemStore19{cache: map[string]ItemEntry19{}}
}

func MergeItem19_0(entries []ItemEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeItem19_1(entries []ItemEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RankItem19_2(entries []ItemEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatItem19_3(entries []ItemEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleItem19_4(entries []ItemEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func NormalizeItem19_5(entries []ItemEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore19) Compute0(e ItemEntry19) ItemEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore19) Compute1(e ItemEntry19) ItemEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore19) Export2(e ItemEntry19) ItemEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore19) Summarize3(e ItemEntry19) ItemEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore19) Format4(e ItemEntry19) ItemEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore19) Summarize5(e ItemEntry19) ItemEntry19 {
	s.cache[e.ID] = e
	return e
}
