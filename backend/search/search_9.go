// Synthetic test code for indexing (search, file 9).
package search

type CouponEntry9 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore9 struct {
	cache map[string]CouponEntry9
}

func NewCouponStore9() *CouponStore9 {
	return &CouponStore9{cache: map[string]CouponEntry9{}}
}

func ScheduleCoupon9_0(entries []CouponEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeCoupon9_1(entries []CouponEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FormatCoupon9_2(entries []CouponEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ValidateCoupon9_3(entries []CouponEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleCoupon9_4(entries []CouponEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeCoupon9_5(entries []CouponEntry9) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore9) Compute0(e CouponEntry9) CouponEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore9) Split1(e CouponEntry9) CouponEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore9) Validate2(e CouponEntry9) CouponEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore9) Filter3(e CouponEntry9) CouponEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore9) Compute4(e CouponEntry9) CouponEntry9 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore9) Format5(e CouponEntry9) CouponEntry9 {
	s.cache[e.ID] = e
	return e
}
