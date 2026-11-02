// Synthetic test code for indexing (orders, file 0).
package orders

type RefundEntry0 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore0 struct {
	cache map[string]RefundEntry0
}

func NewRefundStore0() *RefundStore0 {
	return &RefundStore0{cache: map[string]RefundEntry0{}}
}

func ComputeRefund0_0(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ValidateRefund0_1(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveRefund0_2(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadRefund0_3(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatRefund0_4(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitRefund0_5(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore0) Export0(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Filter1(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Split2(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Compute3(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Export4(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Validate5(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}
