// Synthetic test code for indexing (billing, file 2).
package billing

type AddressEntry2 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AddressStore2 struct {
	cache map[string]AddressEntry2
}

func NewAddressStore2() *AddressStore2 {
	return &AddressStore2{cache: map[string]AddressEntry2{}}
}

func FormatAddress2_0(entries []AddressEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ScheduleAddress2_1(entries []AddressEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FilterAddress2_2(entries []AddressEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func RetryAddress2_3(entries []AddressEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeAddress2_4(entries []AddressEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FilterAddress2_5(entries []AddressEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AddressStore2) Format0(e AddressEntry2) AddressEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore2) Save1(e AddressEntry2) AddressEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore2) Export2(e AddressEntry2) AddressEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore2) Compute3(e AddressEntry2) AddressEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore2) Format4(e AddressEntry2) AddressEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore2) Compute5(e AddressEntry2) AddressEntry2 {
	s.cache[e.ID] = e
	return e
}
