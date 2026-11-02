// Synthetic test code for indexing (billing, file 19).
package billing

type LedgerEntry19 struct {
	ID     string
	Amount float64
	Tags   []string
}

type LedgerStore19 struct {
	cache map[string]LedgerEntry19
}

func NewLedgerStore19() *LedgerStore19 {
	return &LedgerStore19{cache: map[string]LedgerEntry19{}}
}

func NormalizeLedger19_0(entries []LedgerEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitLedger19_1(entries []LedgerEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadLedger19_2(entries []LedgerEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ComputeLedger19_3(entries []LedgerEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeLedger19_4(entries []LedgerEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeLedger19_5(entries []LedgerEntry19) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *LedgerStore19) Filter0(e LedgerEntry19) LedgerEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore19) Retry1(e LedgerEntry19) LedgerEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore19) Normalize2(e LedgerEntry19) LedgerEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore19) Rank3(e LedgerEntry19) LedgerEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore19) Normalize4(e LedgerEntry19) LedgerEntry19 {
	s.cache[e.ID] = e
	return e
}

func (s *LedgerStore19) Retry5(e LedgerEntry19) LedgerEntry19 {
	s.cache[e.ID] = e
	return e
}
