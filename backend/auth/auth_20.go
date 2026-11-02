// Synthetic test code for indexing (auth, file 20).
package auth

type AddressEntry20 struct {
	ID     string
	Amount float64
	Tags   []string
}

type AddressStore20 struct {
	cache map[string]AddressEntry20
}

func NewAddressStore20() *AddressStore20 {
	return &AddressStore20{cache: map[string]AddressEntry20{}}
}

func ScheduleAddress20_0(entries []AddressEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func MergeAddress20_1(entries []AddressEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ExportAddress20_2(entries []AddressEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeAddress20_3(entries []AddressEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func MergeAddress20_4(entries []AddressEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveAddress20_5(entries []AddressEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *AddressStore20) Retry0(e AddressEntry20) AddressEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore20) Validate1(e AddressEntry20) AddressEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore20) Split2(e AddressEntry20) AddressEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore20) Summarize3(e AddressEntry20) AddressEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore20) Retry4(e AddressEntry20) AddressEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *AddressStore20) Split5(e AddressEntry20) AddressEntry20 {
	s.cache[e.ID] = e
	return e
}
