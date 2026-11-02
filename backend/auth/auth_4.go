// Synthetic test code for indexing (auth, file 4).
package auth

type CouponEntry4 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore4 struct {
	cache map[string]CouponEntry4
}

func NewCouponStore4() *CouponStore4 {
	return &CouponStore4{cache: map[string]CouponEntry4{}}
}

func ScheduleCoupon4_0(entries []CouponEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitCoupon4_1(entries []CouponEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeCoupon4_2(entries []CouponEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ExportCoupon4_3(entries []CouponEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeCoupon4_4(entries []CouponEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatCoupon4_5(entries []CouponEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore4) Schedule0(e CouponEntry4) CouponEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore4) Merge1(e CouponEntry4) CouponEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore4) Filter2(e CouponEntry4) CouponEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore4) Merge3(e CouponEntry4) CouponEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore4) Normalize4(e CouponEntry4) CouponEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore4) Rank5(e CouponEntry4) CouponEntry4 {
	s.cache[e.ID] = e
	return e
}
