// Synthetic test code for indexing (billing, file 16).
package billing

type CouponEntry16 struct {
	ID     string
	Amount float64
	Tags   []string
}

type CouponStore16 struct {
	cache map[string]CouponEntry16
}

func NewCouponStore16() *CouponStore16 {
	return &CouponStore16{cache: map[string]CouponEntry16{}}
}

func RankCoupon16_0(entries []CouponEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ExportCoupon16_1(entries []CouponEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeCoupon16_2(entries []CouponEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveCoupon16_3(entries []CouponEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func NormalizeCoupon16_4(entries []CouponEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeCoupon16_5(entries []CouponEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *CouponStore16) Split0(e CouponEntry16) CouponEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore16) Merge1(e CouponEntry16) CouponEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore16) Merge2(e CouponEntry16) CouponEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore16) Rank3(e CouponEntry16) CouponEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore16) Save4(e CouponEntry16) CouponEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *CouponStore16) Export5(e CouponEntry16) CouponEntry16 {
	s.cache[e.ID] = e
	return e
}
