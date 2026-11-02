// Synthetic test code for indexing (inventory, file 2).
package inventory

type ProductEntry2 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ProductStore2 struct {
	cache map[string]ProductEntry2
}

func NewProductStore2() *ProductStore2 {
	return &ProductStore2{cache: map[string]ProductEntry2{}}
}

func ScheduleProduct2_0(entries []ProductEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveProduct2_1(entries []ProductEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryProduct2_2(entries []ProductEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadProduct2_3(entries []ProductEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func MergeProduct2_4(entries []ProductEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RetryProduct2_5(entries []ProductEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ProductStore2) Split0(e ProductEntry2) ProductEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore2) Format1(e ProductEntry2) ProductEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore2) Summarize2(e ProductEntry2) ProductEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore2) Save3(e ProductEntry2) ProductEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore2) Format4(e ProductEntry2) ProductEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore2) Schedule5(e ProductEntry2) ProductEntry2 {
	s.cache[e.ID] = e
	return e
}
