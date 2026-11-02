// Synthetic test code for indexing (shipping, file 12).
package shipping

type LedgerEntry12 struct {
	ID     string
	Amount float64
	Tags   []string
}

type LedgerStore12 struct {
	cache map[string]LedgerEntry12
}

func NewLedgerStore12() *LedgerStore12 {
	return &LedgerStore12{cache: map[string]LedgerEntry12{}}
}

func ValidateLedger12_0(entries []LedgerEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SaveLedger12_1(entries []LedgerEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadLedger12_2(entries []LedgerEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadLedger12_3(entries []LedgerEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FilterLedger12_4(entries []LedgerEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FilterLedger12_5(entries []LedgerEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *LedgerStore12) Split0(e LedgerEntry12) LedgerEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore12) Summarize1(e LedgerEntry12) LedgerEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore12) Summarize2(e LedgerEntry12) LedgerEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore12) Save3(e LedgerEntry12) LedgerEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore12) Format4(e LedgerEntry12) LedgerEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore12) Compute5(e LedgerEntry12) LedgerEntry12 {
	s.cache[e.ID] = e
	return e
}
