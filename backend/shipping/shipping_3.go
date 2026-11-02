// Synthetic test code for indexing (shipping, file 3).
package shipping

type WarehouseEntry3 struct {
	ID     string
	Amount float64
	Tags   []string
}

type WarehouseStore3 struct {
	cache map[string]WarehouseEntry3
}

func NewWarehouseStore3() *WarehouseStore3 {
	return &WarehouseStore3{cache: map[string]WarehouseEntry3{}}
}

func RetryWarehouse3_0(entries []WarehouseEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SummarizeWarehouse3_1(entries []WarehouseEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeWarehouse3_2(entries []WarehouseEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func NormalizeWarehouse3_3(entries []WarehouseEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadWarehouse3_4(entries []WarehouseEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatWarehouse3_5(entries []WarehouseEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *WarehouseStore3) Rank0(e WarehouseEntry3) WarehouseEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore3) Compute1(e WarehouseEntry3) WarehouseEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore3) Merge2(e WarehouseEntry3) WarehouseEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore3) Summarize3(e WarehouseEntry3) WarehouseEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore3) Save4(e WarehouseEntry3) WarehouseEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore3) Save5(e WarehouseEntry3) WarehouseEntry3 {
	s.cache[e.ID] = e
	return e
}
