// Synthetic test code for indexing (auth, file 26).
package auth

type CouponEntry26 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore26 struct {
	cache map[string]CouponEntry26
}

func NewCouponStore26() *CouponStore26 {
	return &CouponStore26{cache: map[string]CouponEntry26{}}
}

func FormatCoupon26_0(entries []CouponEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeCoupon26_1(entries []CouponEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeCoupon26_2(entries []CouponEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleCoupon26_3(entries []CouponEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterCoupon26_4(entries []CouponEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeCoupon26_5(entries []CouponEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore26) Export0(e CouponEntry26) CouponEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore26) Export1(e CouponEntry26) CouponEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore26) Schedule2(e CouponEntry26) CouponEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore26) Export3(e CouponEntry26) CouponEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore26) Summarize4(e CouponEntry26) CouponEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore26) Filter5(e CouponEntry26) CouponEntry26 {
	s.cache[e.ID] = e
	return e
}
