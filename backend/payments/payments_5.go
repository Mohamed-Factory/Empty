// Synthetic test code for indexing (payments, file 5).
package payments

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

func NormalizeItem5_0(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RetryItem5_1(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeItem5_2(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterItem5_3(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RankItem5_4(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportItem5_5(entries []ItemEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ItemStore5) Load0(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Validate1(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Merge2(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Save3(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Schedule4(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ItemStore5) Normalize5(e ItemEntry5) ItemEntry5 {
	s.cache[e.ID] = e
	return e
}
