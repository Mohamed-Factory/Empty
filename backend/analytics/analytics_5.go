// Synthetic test code for indexing (analytics, file 5).
package analytics

type ProductEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ProductStore5 struct {
	cache map[string]ProductEntry5
}

func NewProductStore5() *ProductStore5 {
	return &ProductStore5{cache: map[string]ProductEntry5{}}
}

func FormatProduct5_0(entries []ProductEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RankProduct5_1(entries []ProductEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeProduct5_2(entries []ProductEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeProduct5_3(entries []ProductEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitProduct5_4(entries []ProductEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RankProduct5_5(entries []ProductEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ProductStore5) Export0(e ProductEntry5) ProductEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore5) Format1(e ProductEntry5) ProductEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore5) Merge2(e ProductEntry5) ProductEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore5) Save3(e ProductEntry5) ProductEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore5) Load4(e ProductEntry5) ProductEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *ProductStore5) Save5(e ProductEntry5) ProductEntry5 {
	s.cache[e.ID] = e
	return e
}
