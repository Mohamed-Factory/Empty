// Synthetic test code for indexing (orders, file 6).
package orders

type ParcelEntry6 struct {
	ID     string
	Amount float64
	Tags   []string
}

type ParcelStore6 struct {
	cache map[string]ParcelEntry6
}

func NewParcelStore6() *ParcelStore6 {
	return &ParcelStore6{cache: map[string]ParcelEntry6{}}
}

func SplitParcel6_0(entries []ParcelEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeParcel6_1(entries []ParcelEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryParcel6_2(entries []ParcelEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeParcel6_3(entries []ParcelEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeParcel6_4(entries []ParcelEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeParcel6_5(entries []ParcelEntry6) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *ParcelStore6) Retry0(e ParcelEntry6) ParcelEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore6) Validate1(e ParcelEntry6) ParcelEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore6) Compute2(e ParcelEntry6) ParcelEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore6) Filter3(e ParcelEntry6) ParcelEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore6) Summarize4(e ParcelEntry6) ParcelEntry6 {
	s.cache[e.ID] = e
	return e
}

func (s *ParcelStore6) Split5(e ParcelEntry6) ParcelEntry6 {
	s.cache[e.ID] = e
	return e
}
