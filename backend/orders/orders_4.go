// Synthetic test code for indexing (orders, file 4).
package orders

type EventEntry4 struct {
	ID     string
	Amount float64
	Tags   []string
}

type EventStore4 struct {
	cache map[string]EventEntry4
}

func NewEventStore4() *EventStore4 {
	return &EventStore4{cache: map[string]EventEntry4{}}
}

func RetryEvent4_0(entries []EventEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func SplitEvent4_1(entries []EventEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func MergeEvent4_2(entries []EventEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func LoadEvent4_3(entries []EventEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func SplitEvent4_4(entries []EventEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func LoadEvent4_5(entries []EventEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *EventStore4) Filter0(e EventEntry4) EventEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore4) Summarize1(e EventEntry4) EventEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore4) Compute2(e EventEntry4) EventEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore4) Merge3(e EventEntry4) EventEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore4) Summarize4(e EventEntry4) EventEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *EventStore4) Format5(e EventEntry4) EventEntry4 {
	s.cache[e.ID] = e
	return e
}
