// Synthetic test code for indexing (billing, file 13).
package billing

type PaymentEntry13 struct {
	ID     string
	Amount float64
	Tags   []string
}

type PaymentStore13 struct {
	cache map[string]PaymentEntry13
}

func NewPaymentStore13() *PaymentStore13 {
	return &PaymentStore13{cache: map[string]PaymentEntry13{}}
}

func SchedulePayment13_0(entries []PaymentEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitPayment13_1(entries []PaymentEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FormatPayment13_2(entries []PaymentEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizePayment13_3(entries []PaymentEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizePayment13_4(entries []PaymentEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func NormalizePayment13_5(entries []PaymentEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *PaymentStore13) Normalize0(e PaymentEntry13) PaymentEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore13) Save1(e PaymentEntry13) PaymentEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore13) Filter2(e PaymentEntry13) PaymentEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore13) Load3(e PaymentEntry13) PaymentEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore13) Split4(e PaymentEntry13) PaymentEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore13) Schedule5(e PaymentEntry13) PaymentEntry13 {
	s.cache[e.ID] = e
	return e
}
