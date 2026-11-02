// Synthetic test code for indexing (search, file 20).
package search

type ParcelEntry20 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ParcelStore20 struct {
	cache map[string]ParcelEntry20
}

func NewParcelStore20() *ParcelStore20 {
	return &ParcelStore20{cache: map[string]ParcelEntry20{}}
}

func RetryParcel20_0(entries []ParcelEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveParcel20_1(entries []ParcelEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RankParcel20_2(entries []ParcelEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleParcel20_3(entries []ParcelEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitParcel20_4(entries []ParcelEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitParcel20_5(entries []ParcelEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ParcelStore20) Schedule0(e ParcelEntry20) ParcelEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore20) Filter1(e ParcelEntry20) ParcelEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore20) Save2(e ParcelEntry20) ParcelEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore20) Summarize3(e ParcelEntry20) ParcelEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore20) Compute4(e ParcelEntry20) ParcelEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore20) Split5(e ParcelEntry20) ParcelEntry20 {
	s.cache[e.ID] = e
	return e
}
