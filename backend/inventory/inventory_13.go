// Synthetic test code for indexing (inventory, file 13).
package inventory

type RefundEntry13 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore13 struct {
	cache map[string]RefundEntry13
}

func NewRefundStore13() *RefundStore13 {
	return &RefundStore13{cache: map[string]RefundEntry13{}}
}

func ScheduleRefund13_0(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveRefund13_1(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FilterRefund13_2(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveRefund13_3(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeRefund13_4(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateRefund13_5(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore13) Rank0(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Export1(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Split2(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Save3(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Filter4(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Filter5(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}
