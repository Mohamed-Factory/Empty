// Synthetic test code for indexing (notifications, file 0).
package notifications

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

func FilterRefund0_0(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeRefund0_1(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeRefund0_2(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatRefund0_3(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterRefund0_4(entries []RefundEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportRefund0_5(entries []RefundEntry0) float64 {
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

func (s *RefundStore0) Split1(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Load2(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Merge3(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Load4(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *RefundStore0) Save5(e RefundEntry0) RefundEntry0 {
	s.cache[e.ID] = e
	return e
}
