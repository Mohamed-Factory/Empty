// Synthetic test code for indexing (auth, file 27).
package auth

type RefundEntry27 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore27 struct {
	cache map[string]RefundEntry27
}

func NewRefundStore27() *RefundStore27 {
	return &RefundStore27{cache: map[string]RefundEntry27{}}
}

func LoadRefund27_0(entries []RefundEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveRefund27_1(entries []RefundEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeRefund27_2(entries []RefundEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeRefund27_3(entries []RefundEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadRefund27_4(entries []RefundEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateRefund27_5(entries []RefundEntry27) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore27) Filter0(e RefundEntry27) RefundEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore27) Schedule1(e RefundEntry27) RefundEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore27) Rank2(e RefundEntry27) RefundEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore27) Retry3(e RefundEntry27) RefundEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore27) Save4(e RefundEntry27) RefundEntry27 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore27) Split5(e RefundEntry27) RefundEntry27 {
	s.cache[e.ID] = e
	return e
}
