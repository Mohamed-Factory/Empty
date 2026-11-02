// Synthetic test code for indexing (catalog, file 15).
package catalog

type CouponEntry15 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore15 struct {
	cache map[string]CouponEntry15
}

func NewCouponStore15() *CouponStore15 {
	return &CouponStore15{cache: map[string]CouponEntry15{}}
}

func ComputeCoupon15_0(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatCoupon15_1(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SaveCoupon15_2(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveCoupon15_3(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveCoupon15_4(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeCoupon15_5(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore15) Filter0(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Retry1(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Export2(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Merge3(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Load4(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Compute5(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}
