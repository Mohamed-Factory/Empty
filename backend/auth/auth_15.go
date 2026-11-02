// Synthetic test code for indexing (auth, file 15).
package auth

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

func SaveCoupon15_0(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeCoupon15_1(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitCoupon15_2(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RankCoupon15_3(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ValidateCoupon15_4(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitCoupon15_5(entries []CouponEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore15) Validate0(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Format1(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Format2(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Split3(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Rank4(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore15) Export5(e CouponEntry15) CouponEntry15 {
	s.cache[e.ID] = e
	return e
}
