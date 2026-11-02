// Synthetic test code for indexing (shipping, file 1).
package shipping

type InvoiceEntry1 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore1 struct {
	cache map[string]InvoiceEntry1
}

func NewInvoiceStore1() *InvoiceStore1 {
	return &InvoiceStore1{cache: map[string]InvoiceEntry1{}}
}

func SaveInvoice1_0(entries []InvoiceEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RankInvoice1_1(entries []InvoiceEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeInvoice1_2(entries []InvoiceEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func NormalizeInvoice1_3(entries []InvoiceEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeInvoice1_4(entries []InvoiceEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RankInvoice1_5(entries []InvoiceEntry1) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore1) Filter0(e InvoiceEntry1) InvoiceEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore1) Filter1(e InvoiceEntry1) InvoiceEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore1) Compute2(e InvoiceEntry1) InvoiceEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore1) Load3(e InvoiceEntry1) InvoiceEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore1) Rank4(e InvoiceEntry1) InvoiceEntry1 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore1) Merge5(e InvoiceEntry1) InvoiceEntry1 {
	s.cache[e.ID] = e
	return e
}
