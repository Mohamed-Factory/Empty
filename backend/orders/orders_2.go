// Synthetic test code for indexing (orders, file 2).
package orders

type InvoiceEntry2 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore2 struct {
	cache map[string]InvoiceEntry2
}

func NewInvoiceStore2() *InvoiceStore2 {
	return &InvoiceStore2{cache: map[string]InvoiceEntry2{}}
}

func SaveInvoice2_0(entries []InvoiceEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitInvoice2_1(entries []InvoiceEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeInvoice2_2(entries []InvoiceEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func NormalizeInvoice2_3(entries []InvoiceEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeInvoice2_4(entries []InvoiceEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ComputeInvoice2_5(entries []InvoiceEntry2) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore2) Filter0(e InvoiceEntry2) InvoiceEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore2) Merge1(e InvoiceEntry2) InvoiceEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore2) Load2(e InvoiceEntry2) InvoiceEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore2) Load3(e InvoiceEntry2) InvoiceEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore2) Format4(e InvoiceEntry2) InvoiceEntry2 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore2) Normalize5(e InvoiceEntry2) InvoiceEntry2 {
	s.cache[e.ID] = e
	return e
}
