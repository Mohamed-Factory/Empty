// Synthetic test code for indexing (catalog, file 6).
package catalog

type CouponEntry6 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore6 struct {
	cache map[string]CouponEntry6
}

func NewCouponStore6() *CouponStore6 {
	return &CouponStore6{cache: map[string]CouponEntry6{}}
}

func ComputeCoupon6_0(entries []CouponEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeCoupon6_1(entries []CouponEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ExportCoupon6_2(entries []CouponEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ComputeCoupon6_3(entries []CouponEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadCoupon6_4(entries []CouponEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ScheduleCoupon6_5(entries []CouponEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore6) Validate0(e CouponEntry6) CouponEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore6) Save1(e CouponEntry6) CouponEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore6) Schedule2(e CouponEntry6) CouponEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore6) Schedule3(e CouponEntry6) CouponEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore6) Validate4(e CouponEntry6) CouponEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore6) Split5(e CouponEntry6) CouponEntry6 {
	s.cache[e.ID] = e
	return e
}
