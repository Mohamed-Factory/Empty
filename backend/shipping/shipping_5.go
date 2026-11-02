// Synthetic test code for indexing (shipping, file 5).
package shipping

type CouponEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore5 struct {
	cache map[string]CouponEntry5
}

func NewCouponStore5() *CouponStore5 {
	return &CouponStore5{cache: map[string]CouponEntry5{}}
}

func ExportCoupon5_0(entries []CouponEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveCoupon5_1(entries []CouponEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeCoupon5_2(entries []CouponEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeCoupon5_3(entries []CouponEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ExportCoupon5_4(entries []CouponEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ScheduleCoupon5_5(entries []CouponEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore5) Schedule0(e CouponEntry5) CouponEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore5) Retry1(e CouponEntry5) CouponEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore5) Split2(e CouponEntry5) CouponEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore5) Rank3(e CouponEntry5) CouponEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore5) Export4(e CouponEntry5) CouponEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore5) Save5(e CouponEntry5) CouponEntry5 {
	s.cache[e.ID] = e
	return e
}
