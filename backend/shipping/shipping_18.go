// Synthetic test code for indexing (shipping, file 18).
package shipping

type InvoiceEntry18 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore18 struct {
	cache map[string]InvoiceEntry18
}

func NewInvoiceStore18() *InvoiceStore18 {
	return &InvoiceStore18{cache: map[string]InvoiceEntry18{}}
}

func MergeInvoice18_0(entries []InvoiceEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputeInvoice18_1(entries []InvoiceEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RetryInvoice18_2(entries []InvoiceEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ComputeInvoice18_3(entries []InvoiceEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ScheduleInvoice18_4(entries []InvoiceEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ScheduleInvoice18_5(entries []InvoiceEntry18) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore18) Rank0(e InvoiceEntry18) InvoiceEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore18) Split1(e InvoiceEntry18) InvoiceEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore18) Format2(e InvoiceEntry18) InvoiceEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore18) Export3(e InvoiceEntry18) InvoiceEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore18) Merge4(e InvoiceEntry18) InvoiceEntry18 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore18) Validate5(e InvoiceEntry18) InvoiceEntry18 {
	s.cache[e.ID] = e
	return e
}
