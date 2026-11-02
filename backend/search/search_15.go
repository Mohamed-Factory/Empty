// Synthetic test code for indexing (search, file 15).
package search

type AddressEntry15 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AddressStore15 struct {
	cache map[string]AddressEntry15
}

func NewAddressStore15() *AddressStore15 {
	return &AddressStore15{cache: map[string]AddressEntry15{}}
}

func SplitAddress15_0(entries []AddressEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitAddress15_1(entries []AddressEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitAddress15_2(entries []AddressEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleAddress15_3(entries []AddressEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func MergeAddress15_4(entries []AddressEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitAddress15_5(entries []AddressEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AddressStore15) Normalize0(e AddressEntry15) AddressEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore15) Format1(e AddressEntry15) AddressEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore15) Rank2(e AddressEntry15) AddressEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore15) Filter3(e AddressEntry15) AddressEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore15) Save4(e AddressEntry15) AddressEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore15) Split5(e AddressEntry15) AddressEntry15 {
	s.cache[e.ID] = e
	return e
}
