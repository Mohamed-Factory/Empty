// Synthetic test code for indexing (accounts, file 4).
package accounts

type MessageEntry4 struct {
	ID     string
	Amount float64
	Tags   []string
}

type MessageStore4 struct {
	cache map[string]MessageEntry4
}

func NewMessageStore4() *MessageStore4 {
	return &MessageStore4{cache: map[string]MessageEntry4{}}
}

func SummarizeMessage4_0(entries []MessageEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func NormalizeMessage4_1(entries []MessageEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func SummarizeMessage4_2(entries []MessageEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ScheduleMessage4_3(entries []MessageEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func LoadMessage4_4(entries []MessageEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func LoadMessage4_5(entries []MessageEntry4) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *MessageStore4) Compute0(e MessageEntry4) MessageEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore4) Summarize1(e MessageEntry4) MessageEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore4) Format2(e MessageEntry4) MessageEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore4) Merge3(e MessageEntry4) MessageEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore4) Normalize4(e MessageEntry4) MessageEntry4 {
	s.cache[e.ID] = e
	return e
}

func (s *MessageStore4) Split5(e MessageEntry4) MessageEntry4 {
	s.cache[e.ID] = e
	return e
}
