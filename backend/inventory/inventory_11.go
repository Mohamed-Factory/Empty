// Synthetic test code for indexing (inventory, file 11).
package inventory

type InvoiceEntry11 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore11 struct {
	cache map[string]InvoiceEntry11
}

func NewInvoiceStore11() *InvoiceStore11 {
	return &InvoiceStore11{cache: map[string]InvoiceEntry11{}}
}

func RetryInvoice11_0(entries []InvoiceEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func RankInvoice11_1(entries []InvoiceEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SplitInvoice11_2(entries []InvoiceEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ExportInvoice11_3(entries []InvoiceEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleInvoice11_4(entries []InvoiceEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ScheduleInvoice11_5(entries []InvoiceEntry11) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore11) Format0(e InvoiceEntry11) InvoiceEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore11) Save1(e InvoiceEntry11) InvoiceEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore11) Compute2(e InvoiceEntry11) InvoiceEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore11) Summarize3(e InvoiceEntry11) InvoiceEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore11) Compute4(e InvoiceEntry11) InvoiceEntry11 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore11) Split5(e InvoiceEntry11) InvoiceEntry11 {
	s.cache[e.ID] = e
	return e
}
