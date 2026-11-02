// Synthetic test code for indexing (billing, file 8).
package billing

type PaymentEntry8 struct {
	ID     string
	Amount float64
	Tags   []string
}

type PaymentStore8 struct {
	cache map[string]PaymentEntry8
}

func NewPaymentStore8() *PaymentStore8 {
	return &PaymentStore8{cache: map[string]PaymentEntry8{}}
}

func FilterPayment8_0(entries []PaymentEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FilterPayment8_1(entries []PaymentEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadPayment8_2(entries []PaymentEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func FilterPayment8_3(entries []PaymentEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SchedulePayment8_4(entries []PaymentEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SavePayment8_5(entries []PaymentEntry8) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *PaymentStore8) Retry0(e PaymentEntry8) PaymentEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore8) Compute1(e PaymentEntry8) PaymentEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore8) Rank2(e PaymentEntry8) PaymentEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore8) Compute3(e PaymentEntry8) PaymentEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore8) Format4(e PaymentEntry8) PaymentEntry8 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore8) Rank5(e PaymentEntry8) PaymentEntry8 {
	s.cache[e.ID] = e
	return e
}
