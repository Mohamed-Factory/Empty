// Synthetic test code for indexing (shipping, file 15).
package shipping

type LedgerEntry15 struct {
	ID     string
	Amount float64
	Tags   []string
}

type LedgerStore15 struct {
	cache map[string]LedgerEntry15
}

func NewLedgerStore15() *LedgerStore15 {
	return &LedgerStore15{cache: map[string]LedgerEntry15{}}
}

func SaveLedger15_0(entries []LedgerEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatLedger15_1(entries []LedgerEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RankLedger15_2(entries []LedgerEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveLedger15_3(entries []LedgerEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatLedger15_4(entries []LedgerEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveLedger15_5(entries []LedgerEntry15) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *LedgerStore15) Compute0(e LedgerEntry15) LedgerEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore15) Schedule1(e LedgerEntry15) LedgerEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore15) Filter2(e LedgerEntry15) LedgerEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore15) Normalize3(e LedgerEntry15) LedgerEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore15) Merge4(e LedgerEntry15) LedgerEntry15 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore15) Merge5(e LedgerEntry15) LedgerEntry15 {
	s.cache[e.ID] = e
	return e
}
