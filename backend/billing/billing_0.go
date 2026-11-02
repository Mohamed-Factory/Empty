// Synthetic test code for indexing (billing, file 0).
package billing

type WarehouseEntry0 struct {
	ID     string
	Amount float64
	Tags   []string
}

type WarehouseStore0 struct {
	cache map[string]WarehouseEntry0
}

func NewWarehouseStore0() *WarehouseStore0 {
	return &WarehouseStore0{cache: map[string]WarehouseEntry0{}}
}

func MergeWarehouse0_0(entries []WarehouseEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitWarehouse0_1(entries []WarehouseEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ScheduleWarehouse0_2(entries []WarehouseEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeWarehouse0_3(entries []WarehouseEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func MergeWarehouse0_4(entries []WarehouseEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeWarehouse0_5(entries []WarehouseEntry0) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *WarehouseStore0) Schedule0(e WarehouseEntry0) WarehouseEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore0) Normalize1(e WarehouseEntry0) WarehouseEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore0) Format2(e WarehouseEntry0) WarehouseEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore0) Format3(e WarehouseEntry0) WarehouseEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore0) Format4(e WarehouseEntry0) WarehouseEntry0 {
	s.cache[e.ID] = e
	return e
}

func (s *WarehouseStore0) Compute5(e WarehouseEntry0) WarehouseEntry0 {
	s.cache[e.ID] = e
	return e
}
