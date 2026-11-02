// Synthetic test code for indexing (payments, file 10).
package payments

type AddressEntry10 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AddressStore10 struct {
	cache map[string]AddressEntry10
}

func NewAddressStore10() *AddressStore10 {
	return &AddressStore10{cache: map[string]AddressEntry10{}}
}

func SummarizeAddress10_0(entries []AddressEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeAddress10_1(entries []AddressEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeAddress10_2(entries []AddressEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterAddress10_3(entries []AddressEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeAddress10_4(entries []AddressEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportAddress10_5(entries []AddressEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AddressStore10) Validate0(e AddressEntry10) AddressEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore10) Retry1(e AddressEntry10) AddressEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore10) Save2(e AddressEntry10) AddressEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore10) Normalize3(e AddressEntry10) AddressEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore10) Split4(e AddressEntry10) AddressEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore10) Rank5(e AddressEntry10) AddressEntry10 {
	s.cache[e.ID] = e
	return e
}
