// Synthetic test code for indexing (notifications, file 1).
package notifications

type CouponEntry1 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore1 struct {
	cache map[string]CouponEntry1
}

func NewCouponStore1() *CouponStore1 {
	return &CouponStore1{cache: map[string]CouponEntry1{}}
}

func SplitCoupon1_0(entries []CouponEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ExportCoupon1_1(entries []CouponEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeCoupon1_2(entries []CouponEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleCoupon1_3(entries []CouponEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterCoupon1_4(entries []CouponEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FilterCoupon1_5(entries []CouponEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore1) Schedule0(e CouponEntry1) CouponEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore1) Summarize1(e CouponEntry1) CouponEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore1) Format2(e CouponEntry1) CouponEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore1) Load3(e CouponEntry1) CouponEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore1) Normalize4(e CouponEntry1) CouponEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore1) Split5(e CouponEntry1) CouponEntry1 {
	s.cache[e.ID] = e
	return e
}
