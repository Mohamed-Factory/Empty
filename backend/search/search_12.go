// Synthetic test code for indexing (search, file 12).
package search

type InvoiceEntry12 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore12 struct {
	cache map[string]InvoiceEntry12
}

func NewInvoiceStore12() *InvoiceStore12 {
	return &InvoiceStore12{cache: map[string]InvoiceEntry12{}}
}

func RetryInvoice12_0(entries []InvoiceEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitInvoice12_1(entries []InvoiceEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitInvoice12_2(entries []InvoiceEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ExportInvoice12_3(entries []InvoiceEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveInvoice12_4(entries []InvoiceEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RetryInvoice12_5(entries []InvoiceEntry12) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore12) Format0(e InvoiceEntry12) InvoiceEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore12) Filter1(e InvoiceEntry12) InvoiceEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore12) Summarize2(e InvoiceEntry12) InvoiceEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore12) Validate3(e InvoiceEntry12) InvoiceEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore12) Summarize4(e InvoiceEntry12) InvoiceEntry12 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore12) Schedule5(e InvoiceEntry12) InvoiceEntry12 {
	s.cache[e.ID] = e
	return e
}
