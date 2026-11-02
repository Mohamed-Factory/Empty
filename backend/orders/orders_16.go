// Synthetic test code for indexing (orders, file 16).
package orders

type ProductEntry16 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ProductStore16 struct {
	cache map[string]ProductEntry16
}

func NewProductStore16() *ProductStore16 {
	return &ProductStore16{cache: map[string]ProductEntry16{}}
}

func FilterProduct16_0(entries []ProductEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeProduct16_1(entries []ProductEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeProduct16_2(entries []ProductEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ComputeProduct16_3(entries []ProductEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatProduct16_4(entries []ProductEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeProduct16_5(entries []ProductEntry16) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ProductStore16) Format0(e ProductEntry16) ProductEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore16) Compute1(e ProductEntry16) ProductEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore16) Format2(e ProductEntry16) ProductEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore16) Retry3(e ProductEntry16) ProductEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore16) Format4(e ProductEntry16) ProductEntry16 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore16) Schedule5(e ProductEntry16) ProductEntry16 {
	s.cache[e.ID] = e
	return e
}
