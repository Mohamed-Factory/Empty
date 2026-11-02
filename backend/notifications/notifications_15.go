// Synthetic test code for indexing (notifications, file 15).
package notifications

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

func SplitRefund15_0(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RetryRefund15_1(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryRefund15_2(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadRefund15_3(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeRefund15_4(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportRefund15_5(entries []RefundEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore15) Retry0(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Normalize1(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Merge2(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Format3(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Summarize4(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore15) Validate5(e RefundEntry15) RefundEntry15 {
	s.cache[e.ID] = e
	return e
}
