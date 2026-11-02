// Synthetic test code for indexing (notifications, file 8).
package notifications

type ParcelEntry8 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ParcelStore8 struct {
	cache map[string]ParcelEntry8
}

func NewParcelStore8() *ParcelStore8 {
	return &ParcelStore8{cache: map[string]ParcelEntry8{}}
}

func RetryParcel8_0(entries []ParcelEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitParcel8_1(entries []ParcelEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeParcel8_2(entries []ParcelEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FormatParcel8_3(entries []ParcelEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeParcel8_4(entries []ParcelEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeParcel8_5(entries []ParcelEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ParcelStore8) Summarize0(e ParcelEntry8) ParcelEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore8) Load1(e ParcelEntry8) ParcelEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore8) Load2(e ParcelEntry8) ParcelEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore8) Merge3(e ParcelEntry8) ParcelEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore8) Format4(e ParcelEntry8) ParcelEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore8) Merge5(e ParcelEntry8) ParcelEntry8 {
	s.cache[e.ID] = e
	return e
}
