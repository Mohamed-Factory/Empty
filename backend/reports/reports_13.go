// Synthetic test code for indexing (reports, file 13).
package reports

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

func FormatRefund13_0(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FilterRefund13_1(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ValidateRefund13_2(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RetryRefund13_3(entries []RefundEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatRefund13_4(entries []RefundEntry13) float64 {
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

func (s *RefundStore13) Retry0(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Format1(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Compute2(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Normalize3(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Merge4(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore13) Format5(e RefundEntry13) RefundEntry13 {
	s.cache[e.ID] = e
	return e
}
