// Synthetic test code for indexing (billing, file 14).
package billing

type SessionEntry14 struct {
	ID     string
	Amount float64
	Tags   []string
}

type SessionStore14 struct {
	cache map[string]SessionEntry14
}

func NewSessionStore14() *SessionStore14 {
	return &SessionStore14{cache: map[string]SessionEntry14{}}
}

func FilterSession14_0(entries []SessionEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func FormatSession14_1(entries []SessionEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func LoadSession14_2(entries []SessionEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func SaveSession14_3(entries []SessionEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func ComputeSession14_4(entries []SessionEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func RankSession14_5(entries []SessionEntry14) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *SessionStore14) Export0(e SessionEntry14) SessionEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore14) Export1(e SessionEntry14) SessionEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore14) Filter2(e SessionEntry14) SessionEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore14) Filter3(e SessionEntry14) SessionEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore14) Load4(e SessionEntry14) SessionEntry14 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore14) Retry5(e SessionEntry14) SessionEntry14 {
	s.cache[e.ID] = e
	return e
}
