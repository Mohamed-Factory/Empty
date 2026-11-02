// Synthetic test code for indexing (auth, file 11).
package auth

type RefundEntry11 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore11 struct {
	cache map[string]RefundEntry11
}

func NewRefundStore11() *RefundStore11 {
	return &RefundStore11{cache: map[string]RefundEntry11{}}
}

func ScheduleRefund11_0(entries []RefundEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeRefund11_1(entries []RefundEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryRefund11_2(entries []RefundEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveRefund11_3(entries []RefundEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitRefund11_4(entries []RefundEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateRefund11_5(entries []RefundEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore11) Merge0(e RefundEntry11) RefundEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore11) Retry1(e RefundEntry11) RefundEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore11) Validate2(e RefundEntry11) RefundEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore11) Split3(e RefundEntry11) RefundEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore11) Retry4(e RefundEntry11) RefundEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore11) Merge5(e RefundEntry11) RefundEntry11 {
	s.cache[e.ID] = e
	return e
}
