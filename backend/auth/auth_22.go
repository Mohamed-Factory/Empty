// Synthetic test code for indexing (auth, file 22).
package auth

type RefundEntry22 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore22 struct {
	cache map[string]RefundEntry22
}

func NewRefundStore22() *RefundStore22 {
	return &RefundStore22{cache: map[string]RefundEntry22{}}
}

func SplitRefund22_0(entries []RefundEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func LoadRefund22_1(entries []RefundEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeRefund22_2(entries []RefundEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatRefund22_3(entries []RefundEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadRefund22_4(entries []RefundEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveRefund22_5(entries []RefundEntry22) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore22) Export0(e RefundEntry22) RefundEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore22) Normalize1(e RefundEntry22) RefundEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore22) Normalize2(e RefundEntry22) RefundEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore22) Merge3(e RefundEntry22) RefundEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore22) Load4(e RefundEntry22) RefundEntry22 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore22) Filter5(e RefundEntry22) RefundEntry22 {
	s.cache[e.ID] = e
	return e
}
