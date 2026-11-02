// Synthetic test code for indexing (search, file 3).
package search

type CouponEntry3 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore3 struct {
	cache map[string]CouponEntry3
}

func NewCouponStore3() *CouponStore3 {
	return &CouponStore3{cache: map[string]CouponEntry3{}}
}

func RetryCoupon3_0(entries []CouponEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeCoupon3_1(entries []CouponEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FilterCoupon3_2(entries []CouponEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveCoupon3_3(entries []CouponEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadCoupon3_4(entries []CouponEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateCoupon3_5(entries []CouponEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore3) Merge0(e CouponEntry3) CouponEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore3) Normalize1(e CouponEntry3) CouponEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore3) Format2(e CouponEntry3) CouponEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore3) Compute3(e CouponEntry3) CouponEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore3) Validate4(e CouponEntry3) CouponEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore3) Split5(e CouponEntry3) CouponEntry3 {
	s.cache[e.ID] = e
	return e
}
