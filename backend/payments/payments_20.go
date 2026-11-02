// Synthetic test code for indexing (payments, file 20).
package payments

type InvoiceEntry20 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore20 struct {
	cache map[string]InvoiceEntry20
}

func NewInvoiceStore20() *InvoiceStore20 {
	return &InvoiceStore20{cache: map[string]InvoiceEntry20{}}
}

func SummarizeInvoice20_0(entries []InvoiceEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeInvoice20_1(entries []InvoiceEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadInvoice20_2(entries []InvoiceEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SplitInvoice20_3(entries []InvoiceEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func RetryInvoice20_4(entries []InvoiceEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SplitInvoice20_5(entries []InvoiceEntry20) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore20) Schedule0(e InvoiceEntry20) InvoiceEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore20) Validate1(e InvoiceEntry20) InvoiceEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore20) Split2(e InvoiceEntry20) InvoiceEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore20) Schedule3(e InvoiceEntry20) InvoiceEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore20) Split4(e InvoiceEntry20) InvoiceEntry20 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore20) Summarize5(e InvoiceEntry20) InvoiceEntry20 {
	s.cache[e.ID] = e
	return e
}
