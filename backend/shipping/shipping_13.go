// Synthetic test code for indexing (shipping, file 13).
package shipping

type EventEntry13 struct {
	ID     string
	Amount float64
	Tags   []string
}

type EventStore13 struct {
	cache map[string]EventEntry13
}

func NewEventStore13() *EventStore13 {
	return &EventStore13{cache: map[string]EventEntry13{}}
}

func ComputeEvent13_0(entries []EventEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitEvent13_1(entries []EventEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func RankEvent13_2(entries []EventEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ExportEvent13_3(entries []EventEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeEvent13_4(entries []EventEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateEvent13_5(entries []EventEntry13) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *EventStore13) Validate0(e EventEntry13) EventEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore13) Validate1(e EventEntry13) EventEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore13) Compute2(e EventEntry13) EventEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore13) Filter3(e EventEntry13) EventEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore13) Export4(e EventEntry13) EventEntry13 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore13) Format5(e EventEntry13) EventEntry13 {
	s.cache[e.ID] = e
	return e
}
