// Synthetic test code for indexing (billing, file 26).
package billing

type LedgerEntry26 struct {
	ID     string
	Amount float64
	Tags   []string
}

type LedgerStore26 struct {
	cache map[string]LedgerEntry26
}

func NewLedgerStore26() *LedgerStore26 {
	return &LedgerStore26{cache: map[string]LedgerEntry26{}}
}

func RetryLedger26_0(entries []LedgerEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SummarizeLedger26_1(entries []LedgerEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitLedger26_2(entries []LedgerEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func NormalizeLedger26_3(entries []LedgerEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func MergeLedger26_4(entries []LedgerEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ExportLedger26_5(entries []LedgerEntry26) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *LedgerStore26) Compute0(e LedgerEntry26) LedgerEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore26) Schedule1(e LedgerEntry26) LedgerEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore26) Compute2(e LedgerEntry26) LedgerEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore26) Filter3(e LedgerEntry26) LedgerEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore26) Split4(e LedgerEntry26) LedgerEntry26 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore26) Compute5(e LedgerEntry26) LedgerEntry26 {
	s.cache[e.ID] = e
	return e
}
