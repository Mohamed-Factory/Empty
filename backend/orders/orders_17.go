// Synthetic test code for indexing (orders, file 17).
package orders

type MessageEntry17 struct {
	ID     string
	Amount float64
	Tags   []string
}

type MessageStore17 struct {
	cache map[string]MessageEntry17
}

func NewMessageStore17() *MessageStore17 {
	return &MessageStore17{cache: map[string]MessageEntry17{}}
}

func ScheduleMessage17_0(entries []MessageEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func ScheduleMessage17_1(entries []MessageEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func NormalizeMessage17_2(entries []MessageEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func MergeMessage17_3(entries []MessageEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func NormalizeMessage17_4(entries []MessageEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func MergeMessage17_5(entries []MessageEntry17) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *MessageStore17) Summarize0(e MessageEntry17) MessageEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore17) Retry1(e MessageEntry17) MessageEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore17) Schedule2(e MessageEntry17) MessageEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore17) Format3(e MessageEntry17) MessageEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore17) Format4(e MessageEntry17) MessageEntry17 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore17) Save5(e MessageEntry17) MessageEntry17 {
	s.cache[e.ID] = e
	return e
}
