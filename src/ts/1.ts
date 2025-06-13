interface Fruit {
  apple: string
  banana: string
}

type FruitType = keyof Fruit

const apple: FruitType = 'apple'

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Schedule = Record<Weekday, string>

const obj: Schedule = {
  Mon: 'hh',
}
