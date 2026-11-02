// Synthetic test code for indexing (billing, file 23).
package billing

type AddressEntry23 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AddressStore23 struct {
	cache map[string]AddressEntry23
}

func NewAddressStore23() *AddressStore23 {
	return &AddressStore23{cache: map[string]AddressEntry23{}}
}

func ComputeAddress23_0(entries []AddressEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeAddress23_1(entries []AddressEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeAddress23_2(entries []AddressEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ValidateAddress23_3(entries []AddressEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitAddress23_4(entries []AddressEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeAddress23_5(entries []AddressEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AddressStore23) Filter0(e AddressEntry23) AddressEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore23) Summarize1(e AddressEntry23) AddressEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore23) Schedule2(e AddressEntry23) AddressEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore23) Validate3(e AddressEntry23) AddressEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore23) Export4(e AddressEntry23) AddressEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore23) Save5(e AddressEntry23) AddressEntry23 {
	s.cache[e.ID] = e
	return e
}
