// Synthetic test code for indexing (orders, file 15).
package orders

type RefundEntry15 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore15 struct {
	cache map[string]RefundEntry15
}

func NewRefundStore15() *RefundStore15 {
	return &RefundStore15{cache: map[string]RefundEntry15{}}
}

func SummarizeRefund15_0(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeRefund15_1(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeRefund15_2(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeRefund15_3(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RankRefund15_4(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RetryRefund15_5(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore15) Export0(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Schedule1(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Rank2(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Rank3(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Retry4(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Schedule5(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}
