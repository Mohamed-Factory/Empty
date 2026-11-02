// Synthetic test code for indexing (accounts, file 24).
package accounts

type RefundEntry24 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore24 struct {
	cache map[string]RefundEntry24
}

func NewRefundStore24() *RefundStore24 {
	return &RefundStore24{cache: map[string]RefundEntry24{}}
}

func RankRefund24_0(entries []RefundEntry24) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeRefund24_1(entries []RefundEntry24) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveRefund24_2(entries []RefundEntry24) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeRefund24_3(entries []RefundEntry24) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleRefund24_4(entries []RefundEntry24) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitRefund24_5(entries []RefundEntry24) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore24) Schedule0(e RefundEntry24) RefundEntry24 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore24) Retry1(e RefundEntry24) RefundEntry24 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore24) Summarize2(e RefundEntry24) RefundEntry24 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore24) Filter3(e RefundEntry24) RefundEntry24 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore24) Validate4(e RefundEntry24) RefundEntry24 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore24) Split5(e RefundEntry24) RefundEntry24 {
	s.cache[e.ID] = e
	return e
}
