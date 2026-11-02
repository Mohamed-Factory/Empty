// Synthetic test code for indexing (inventory, file 20).
package inventory

type RefundEntry20 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore20 struct {
	cache map[string]RefundEntry20
}

func NewRefundStore20() *RefundStore20 {
	return &RefundStore20{cache: map[string]RefundEntry20{}}
}

func SaveRefund20_0(entries []RefundEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RetryRefund20_1(entries []RefundEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryRefund20_2(entries []RefundEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ValidateRefund20_3(entries []RefundEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveRefund20_4(entries []RefundEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func LoadRefund20_5(entries []RefundEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore20) Load0(e RefundEntry20) RefundEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore20) Export1(e RefundEntry20) RefundEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore20) Retry2(e RefundEntry20) RefundEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore20) Compute3(e RefundEntry20) RefundEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore20) Validate4(e RefundEntry20) RefundEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore20) Compute5(e RefundEntry20) RefundEntry20 {
	s.cache[e.ID] = e
	return e
}
