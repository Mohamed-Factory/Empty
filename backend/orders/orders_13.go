// Synthetic test code for indexing (orders, file 13).
package orders

type CouponEntry13 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore13 struct {
	cache map[string]CouponEntry13
}

func NewCouponStore13() *CouponStore13 {
	return &CouponStore13{cache: map[string]CouponEntry13{}}
}

func ValidateCoupon13_0(entries []CouponEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitCoupon13_1(entries []CouponEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ScheduleCoupon13_2(entries []CouponEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ComputeCoupon13_3(entries []CouponEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitCoupon13_4(entries []CouponEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeCoupon13_5(entries []CouponEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore13) Retry0(e CouponEntry13) CouponEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore13) Filter1(e CouponEntry13) CouponEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore13) Normalize2(e CouponEntry13) CouponEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore13) Export3(e CouponEntry13) CouponEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore13) Export4(e CouponEntry13) CouponEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore13) Schedule5(e CouponEntry13) CouponEntry13 {
	s.cache[e.ID] = e
	return e
}
