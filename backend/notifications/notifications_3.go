// Synthetic test code for indexing (notifications, file 3).
package notifications

type InvoiceEntry3 struct {
	ID     string
	Amount float64
	Tags   []string
}

type InvoiceStore3 struct {
	cache map[string]InvoiceEntry3
}

func NewInvoiceStore3() *InvoiceStore3 {
	return &InvoiceStore3{cache: map[string]InvoiceEntry3{}}
}

func SplitInvoice3_0(entries []InvoiceEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FilterInvoice3_1(entries []InvoiceEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeInvoice3_2(entries []InvoiceEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizeInvoice3_3(entries []InvoiceEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SaveInvoice3_4(entries []InvoiceEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func FormatInvoice3_5(entries []InvoiceEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *InvoiceStore3) Rank0(e InvoiceEntry3) InvoiceEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore3) Split1(e InvoiceEntry3) InvoiceEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore3) Normalize2(e InvoiceEntry3) InvoiceEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore3) Save3(e InvoiceEntry3) InvoiceEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore3) Normalize4(e InvoiceEntry3) InvoiceEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *InvoiceStore3) Filter5(e InvoiceEntry3) InvoiceEntry3 {
	s.cache[e.ID] = e
	return e
}
