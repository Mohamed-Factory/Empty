// Synthetic test code for indexing (payments, file 23).
package payments

type InvoiceEntry23 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore23 struct {
	cache map[string]InvoiceEntry23
}

func NewInvoiceStore23() *InvoiceStore23 {
	return &InvoiceStore23{cache: map[string]InvoiceEntry23{}}
}

func ExportInvoice23_0(entries []InvoiceEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ScheduleInvoice23_1(entries []InvoiceEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func ComputeInvoice23_2(entries []InvoiceEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ExportInvoice23_3(entries []InvoiceEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadInvoice23_4(entries []InvoiceEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveInvoice23_5(entries []InvoiceEntry23) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore23) Load0(e InvoiceEntry23) InvoiceEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore23) Validate1(e InvoiceEntry23) InvoiceEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore23) Normalize2(e InvoiceEntry23) InvoiceEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore23) Validate3(e InvoiceEntry23) InvoiceEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore23) Format4(e InvoiceEntry23) InvoiceEntry23 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore23) Load5(e InvoiceEntry23) InvoiceEntry23 {
	s.cache[e.ID] = e
	return e
}
