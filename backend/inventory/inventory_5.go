// Synthetic test code for indexing (inventory, file 5).
package inventory

type InvoiceEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore5 struct {
	cache map[string]InvoiceEntry5
}

func NewInvoiceStore5() *InvoiceStore5 {
	return &InvoiceStore5{cache: map[string]InvoiceEntry5{}}
}

func ComputeInvoice5_0(entries []InvoiceEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func LoadInvoice5_1(entries []InvoiceEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeInvoice5_2(entries []InvoiceEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeInvoice5_3(entries []InvoiceEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitInvoice5_4(entries []InvoiceEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateInvoice5_5(entries []InvoiceEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore5) Validate0(e InvoiceEntry5) InvoiceEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore5) Export1(e InvoiceEntry5) InvoiceEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore5) Load2(e InvoiceEntry5) InvoiceEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore5) Summarize3(e InvoiceEntry5) InvoiceEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore5) Retry4(e InvoiceEntry5) InvoiceEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore5) Schedule5(e InvoiceEntry5) InvoiceEntry5 {
	s.cache[e.ID] = e
	return e
}
