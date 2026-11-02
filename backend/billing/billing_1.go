// Synthetic test code for indexing (billing, file 1).
package billing

type ParcelEntry1 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ParcelStore1 struct {
	cache map[string]ParcelEntry1
}

func NewParcelStore1() *ParcelStore1 {
	return &ParcelStore1{cache: map[string]ParcelEntry1{}}
}

func ScheduleParcel1_0(entries []ParcelEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeParcel1_1(entries []ParcelEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeParcel1_2(entries []ParcelEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveParcel1_3(entries []ParcelEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleParcel1_4(entries []ParcelEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SummarizeParcel1_5(entries []ParcelEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ParcelStore1) Retry0(e ParcelEntry1) ParcelEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore1) Schedule1(e ParcelEntry1) ParcelEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore1) Validate2(e ParcelEntry1) ParcelEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore1) Compute3(e ParcelEntry1) ParcelEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore1) Compute4(e ParcelEntry1) ParcelEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore1) Schedule5(e ParcelEntry1) ParcelEntry1 {
	s.cache[e.ID] = e
	return e
}
