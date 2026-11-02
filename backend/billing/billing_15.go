// Synthetic test code for indexing (billing, file 15).
package billing

type ProductEntry15 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ProductStore15 struct {
	cache map[string]ProductEntry15
}

func NewProductStore15() *ProductStore15 {
	return &ProductStore15{cache: map[string]ProductEntry15{}}
}

func FilterProduct15_0(entries []ProductEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func LoadProduct15_1(entries []ProductEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryProduct15_2(entries []ProductEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RetryProduct15_3(entries []ProductEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ValidateProduct15_4(entries []ProductEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func NormalizeProduct15_5(entries []ProductEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ProductStore15) Summarize0(e ProductEntry15) ProductEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore15) Rank1(e ProductEntry15) ProductEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore15) Normalize2(e ProductEntry15) ProductEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore15) Format3(e ProductEntry15) ProductEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore15) Validate4(e ProductEntry15) ProductEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore15) Filter5(e ProductEntry15) ProductEntry15 {
	s.cache[e.ID] = e
	return e
}
