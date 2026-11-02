// Synthetic test code for indexing (orders, file 10).
package orders

type ParcelEntry10 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ParcelStore10 struct {
	cache map[string]ParcelEntry10
}

func NewParcelStore10() *ParcelStore10 {
	return &ParcelStore10{cache: map[string]ParcelEntry10{}}
}

func SplitParcel10_0(entries []ParcelEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FilterParcel10_1(entries []ParcelEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FormatParcel10_2(entries []ParcelEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RetryParcel10_3(entries []ParcelEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleParcel10_4(entries []ParcelEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportParcel10_5(entries []ParcelEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ParcelStore10) Schedule0(e ParcelEntry10) ParcelEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore10) Rank1(e ParcelEntry10) ParcelEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore10) Load2(e ParcelEntry10) ParcelEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore10) Filter3(e ParcelEntry10) ParcelEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore10) Normalize4(e ParcelEntry10) ParcelEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore10) Format5(e ParcelEntry10) ParcelEntry10 {
	s.cache[e.ID] = e
	return e
}
