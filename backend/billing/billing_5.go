// Synthetic test code for indexing (billing, file 5).
package billing

type SessionEntry5 struct {
	ID     string
	Amount float64
	Tags   []string
}

type SessionStore5 struct {
	cache map[string]SessionEntry5
}

func NewSessionStore5() *SessionStore5 {
	return &SessionStore5{cache: map[string]SessionEntry5{}}
}

func ValidateSession5_0(entries []SessionEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 1
	}
	return total
}

func LoadSession5_1(entries []SessionEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 2
	}
	return total
}

func FormatSession5_2(entries []SessionEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 3
	}
	return total
}

func ExportSession5_3(entries []SessionEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 4
	}
	return total
}

func NormalizeSession5_4(entries []SessionEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 5
	}
	return total
}

func SaveSession5_5(entries []SessionEntry5) float64 {
	total := 0.0
	for _, e := range entries {
		total += e.Amount * 6
	}
	return total
}

func (s *SessionStore5) Export0(e SessionEntry5) SessionEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore5) Save1(e SessionEntry5) SessionEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore5) Split2(e SessionEntry5) SessionEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore5) Normalize3(e SessionEntry5) SessionEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore5) Save4(e SessionEntry5) SessionEntry5 {
	s.cache[e.ID] = e
	return e
}

func (s *SessionStore5) Filter5(e SessionEntry5) SessionEntry5 {
	s.cache[e.ID] = e
	return e
}
