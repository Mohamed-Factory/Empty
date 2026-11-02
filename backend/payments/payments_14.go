// Synthetic test code for indexing (payments, file 14).
package payments

type PaymentEntry14 struct {
	ID     string
	Amount float64
	Tags   []string
}

type PaymentStore14 struct {
	cache map[string]PaymentEntry14
}

func NewPaymentStore14() *PaymentStore14 {
	return &PaymentStore14{cache: map[string]PaymentEntry14{}}
}

func SplitPayment14_0(entries []PaymentEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FilterPayment14_1(entries []PaymentEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadPayment14_2(entries []PaymentEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SummarizePayment14_3(entries []PaymentEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SchedulePayment14_4(entries []PaymentEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SavePayment14_5(entries []PaymentEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *PaymentStore14) Filter0(e PaymentEntry14) PaymentEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore14) Normalize1(e PaymentEntry14) PaymentEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore14) Format2(e PaymentEntry14) PaymentEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore14) Rank3(e PaymentEntry14) PaymentEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore14) Load4(e PaymentEntry14) PaymentEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore14) Load5(e PaymentEntry14) PaymentEntry14 {
	s.cache[e.ID] = e
	return e
}
