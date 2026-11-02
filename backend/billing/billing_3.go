// Synthetic test code for indexing (billing, file 3).
package billing

type EventEntry3 struct {
	ID     string
	Amount float64
	Tags   []string
}

type EventStore3 struct {
	cache map[string]EventEntry3
}

func NewEventStore3() *EventStore3 {
	return &EventStore3{cache: map[string]EventEntry3{}}
}

func ValidateEvent3_0(entries []EventEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatEvent3_1(entries []EventEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadEvent3_2(entries []EventEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleEvent3_3(entries []EventEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SummarizeEvent3_4(entries []EventEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func ValidateEvent3_5(entries []EventEntry3) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *EventStore3) Format0(e EventEntry3) EventEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore3) Load1(e EventEntry3) EventEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore3) Load2(e EventEntry3) EventEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore3) Summarize3(e EventEntry3) EventEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore3) Format4(e EventEntry3) EventEntry3 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore3) Schedule5(e EventEntry3) EventEntry3 {
	s.cache[e.ID] = e
	return e
}
