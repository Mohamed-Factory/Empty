// Synthetic test code for indexing (auth, file 1).
package auth

type RefundEntry1 struct {
	ID     string
	Amount float64
	Tags   []string
}

type RefundStore1 struct {
	cache map[string]RefundEntry1
}

func NewRefundStore1() *RefundStore1 {
	return &RefundStore1{cache: map[string]RefundEntry1{}}
}

func FilterRefund1_0(entries []RefundEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeRefund1_1(entries []RefundEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeRefund1_2(entries []RefundEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterRefund1_3(entries []RefundEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitRefund1_4(entries []RefundEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RankRefund1_5(entries []RefundEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *RefundStore1) Filter0(e RefundEntry1) RefundEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore1) Load1(e RefundEntry1) RefundEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore1) Merge2(e RefundEntry1) RefundEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore1) Schedule3(e RefundEntry1) RefundEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore1) Save4(e RefundEntry1) RefundEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore1) Rank5(e RefundEntry1) RefundEntry1 {
	s.cache[e.ID] = e
	return e
}
