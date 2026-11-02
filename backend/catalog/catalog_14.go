// Synthetic test code for indexing (catalog, file 14).
package catalog

type RefundEntry14 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore14 struct {
	cache map[string]RefundEntry14
}

func NewRefundStore14() *RefundStore14 {
	return &RefundStore14{cache: map[string]RefundEntry14{}}
}

func NormalizeRefund14_0(entries []RefundEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeRefund14_1(entries []RefundEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RankRefund14_2(entries []RefundEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RankRefund14_3(entries []RefundEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitRefund14_4(entries []RefundEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportRefund14_5(entries []RefundEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore14) Split0(e RefundEntry14) RefundEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore14) Validate1(e RefundEntry14) RefundEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore14) Load2(e RefundEntry14) RefundEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore14) Retry3(e RefundEntry14) RefundEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore14) Merge4(e RefundEntry14) RefundEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore14) Rank5(e RefundEntry14) RefundEntry14 {
	s.cache[e.ID] = e
	return e
}
