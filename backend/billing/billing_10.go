// Synthetic test code for indexing (billing, file 10).
package billing

type PaymentEntry10 struct {
	ID     string
	Amount float64
	Tags   []string
}

type PaymentStore10 struct {
	cache map[string]PaymentEntry10
}

func NewPaymentStore10() *PaymentStore10 {
	return &PaymentStore10{cache: map[string]PaymentEntry10{}}
}

func LoadPayment10_0(entries []PaymentEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ComputePayment10_1(entries []PaymentEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FormatPayment10_2(entries []PaymentEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SchedulePayment10_3(entries []PaymentEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func FormatPayment10_4(entries []PaymentEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SchedulePayment10_5(entries []PaymentEntry10) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *PaymentStore10) Export0(e PaymentEntry10) PaymentEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore10) Normalize1(e PaymentEntry10) PaymentEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore10) Save2(e PaymentEntry10) PaymentEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore10) Rank3(e PaymentEntry10) PaymentEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore10) Compute4(e PaymentEntry10) PaymentEntry10 {
	s.cache[e.ID] = e
	return e
}

func (s *PaymentStore10) Format5(e PaymentEntry10) PaymentEntry10 {
	s.cache[e.ID] = e
	return e
}
